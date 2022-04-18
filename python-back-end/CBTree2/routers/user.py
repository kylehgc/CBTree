from cmath import log
from getpass import getuser
import string
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional
from deta import Deta
from models.user import User
from routers.auth import get_current_user
from passlib.context import CryptContext

database_exception = HTTPException(
    status.HTTP_503_SERVICE_UNAVAILABLE, detail="Error trying to access Database"
)

user_exception = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST, detail="User already exits"
)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


deta = Deta()

db = deta.Base("monkey")

class User_Data(BaseModel):
    username: EmailStr
    firstName: Optional[str] = None
    lastName: Optional[str] = None

class New_User(User_Data):
    password: str
    


router = APIRouter()

async def get_user(username: EmailStr):
    user = db.fetch({"username": username})
    if user.count > 0:
        return user.items[0]
    return False

@router.get("/users/me", response_model=User_Data)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return_data: User_Data = {
        "username": current_user["username"],
        "firstName": current_user["firstName"],
        "lastName": current_user["lastName"],
    }
    return return_data
    

async def get_user_key(username: str):
    user = await get_user(username)
    if user:
        return user["key"]
    return False

@router.post("/user/")
async def new_user(new_user: New_User):
    new_user_dict = new_user.dict()
    user_key = await get_user_key(new_user_dict["username"])
    if user_key:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User Already Exists",
            headers={"WWW-Authenticate": "Bearer"})
    else:
        hashed_password = pwd_context.hash(new_user_dict["password"])
        user = db.put({**new_user_dict, "password": hashed_password})
        from routers.auth import create_access_token
        encode_data = {"sub": user["username"], "key": user["key"]}
        access_token = create_access_token(encode_data)
        return {"access_token": access_token, "token_type": "bearer"}
