from getpass import getuser
from fastapi import APIRouter
from pydantic import BaseModel, EmailStr 
from typing import Optional
from deta import Deta
from uuid import uuid4
deta = Deta() 
# deta = Deta()
db = deta.Base('monkey')
db.put({"test":"test"})
class New_User(BaseModel):
  email: EmailStr 
  password: str
  firstName: Optional[str] = None
  lastName: Optional[str] = None


router = APIRouter()
async def getUserByEmail(email: str):
  try:
    response = db.fetch({"email": email})
  except:
    response = "so many errors"
  return response



@router.post("/user/")
async def new_user(new_user: New_User):
  # user = jsonable_encoder(new_user.dict())
  user_by_email = await getUserByEmail(new_user.dict()['email'])
  print(user_by_email)
  if user_by_email.count > 0:
    return {"user": user_by_email, "message": "no good bro"}
  else:
    unique_id = str(uuid4())
    db.put(new_user.dict(), unique_id)
    return user_by_email
  

  