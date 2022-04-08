from cmath import log
from getpass import getuser
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr 
from typing import Optional
from deta import Deta
from models.user import User
from passlib.context import CryptContext



database_exception = HTTPException(
  status.HTTP_503_SERVICE_UNAVAILABLE, 
  detail="Error trying to access Database")

user_exception = HTTPException(
  status_code=status.HTTP_400_BAD_REQUEST,
  detail="User already exits")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


deta = Deta() 

db = deta.Base('monkey')


class New_User(BaseModel):
  username: EmailStr 
  password: str
  firstName: Optional[str] = None
  lastName: Optional[str] = None


router = APIRouter()

async def get_user(username: EmailStr):
  user = db.fetch({"email": username})
  if user.count > 0: 
    return user.items[0]
  return False
  

  
    

async def get_user_key(username: str):
    user = await get_user(username)
    if user: 
      return user['key']
    return False


@router.post("/user/")
async def new_user(new_user: New_User):
  new_user_dict = new_user.dict()
  user_key = await get_user_key(new_user_dict['username'])
  if user_key:
    return {"key": user_key, "message": "no good bro"}
  else:
    hashed_password = pwd_context.hash(new_user_dict['password'])
    user = db.put({**new_user_dict,'password': hashed_password})
    from routers.auth import create_access_token
    encode_data = {"sub": user['username'], "key": user['key']}
    access_token= create_access_token(encode_data)
    return {"access_token": access_token, "token_type": "bearer"}
  

  