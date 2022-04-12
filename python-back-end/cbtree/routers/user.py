from fastapi import APIRouter
from pydantic import BaseModel, EmailStr 
from typing import Optional
from deta import Deta
from uuid import uuid4
#from fastapi.encoders import jsonable_encoder
deta = Deta() 

#deta = Deta()
db = deta.Base('user2')

class New_User(BaseModel):
  email: EmailStr 
  password: str
  firstName: Optional[str] = None
  lastName: Optional[str] = None


router = APIRouter()
async def getUserByEmail(email: str):  
  response = db.fetch({"email": email})
  print(response)
  return response
  



@router.post("/user/")
async def new_user(new_user: New_User):
  user_by_email = await getUserByEmail(new_user.dict()['email'])
  if user_by_email.count > 0:
    return {"user": user_by_email, "message": "no good bro"}
  else:
    unique_id = str(uuid4())
    db.put(new_user.dict(), unique_id)
    return user_by_email
  
  