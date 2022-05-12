from ast import Pass
from database import db
from os import getenv
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional
from deta import Deta
from models.user import User
from routers.auth import get_current_user, pwd_context, get_user
from passlib.context import CryptContext
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib

database_exception = HTTPException(
    status.HTTP_503_SERVICE_UNAVAILABLE, detail="Error trying to access Database"
)

user_exception = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST, detail="User already exits"
)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class User_Data(BaseModel):
    username: EmailStr
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    activeThoughtRecord: Optional[str] = None
    thoughtRecords = []

class New_User_Data(User_Data):
    password: str

class New_Password(BaseModel):
    password: str

class Password_Reset(BaseModel):
    user_name: EmailStr

router = APIRouter()

async def send_reset_email(key: str, user_email: EmailStr):
    username=getenv('GMAIL_EMAIL_ACCOUNT')
    password=getenv('GMAIL_APP_PASSWORD')
    print(password)
    print(username)
    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Test email"
    msg['From'] = "CBTree Admin"
    msg['to'] = user_email
    html = (f"<p>Hello, "  
 f"There was a request to change your password!"
f"If you did not make this request then please ignore this email."
f"Otherwise, please click this link to change your password: <a href='https://kylehgc.github.io/CBTree/#/reset/{key}'> Click Here </a></p> ")
    email_body = MIMEText(html, 'html')
    msg.attach(email_body)
    server = smtplib.SMTP('smtp.gmail.com', 587) 
    server.ehlo()
    server.starttls()
    server.login(username,password)  
    server.sendmail(msg['from'],user_email, msg.as_string())  
    server.quit()

@router.get("/user/", response_model=User_Data)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return_data: User_Data = {
        "username": current_user["username"],
        "firstName": current_user["firstName"],
        "lastName": current_user["lastName"],
        "thoughtRecords": current_user["thoughtRecords"],
        "activeThoughtRecord": current_user["activeThoughtRecord"],
    }
    return return_data

@router.post("/user/reset/", status_code=202)
async def request_password_reset(password_reset: Password_Reset):
    user_name = password_reset.dict()['user_name']
    user = await get_user(user_name)
    if user:
        reset_item = db.put({'user_name': user_name}, expire_in=600)
        print(reset_item)
        await send_reset_email(reset_item['key'],user_name)
        
    return "email reset successful"
    


@router.post("/user/reset/{reset_key}", status_code=202)
async def reset_password(reset_key: str, new_password: New_Password):
    reset_object = db.get(reset_key)
    print(reset_object)
    if reset_object: 
        new_password = new_password.dict()['password']
        user = await get_user(reset_object['user_name'])
        hashed_password=pwd_context.hash(new_password)
        db.update({'password': hashed_password},user['key'])
        return "Password Change Successful"
    else: raise HTTPException(status_code=400, detail="Invalid Key")

@router.post("/user/")
async def new_user(new_user: New_User_Data):
    new_user_dict = new_user.dict()
    user = await get_user(new_user_dict["username"])
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User Already Exists",
            headers={"WWW-Authenticate": "Bearer"},
        )
    else:
        hashed_password = pwd_context.hash(new_user_dict["password"])
        new_user_dict["password"] = hashed_password
        new_user = User(**new_user_dict)
        user = db.put(new_user.dict())
        from routers.auth import create_access_token

        encode_data = {"sub": user["username"], "key": user["key"]}
        access_token = create_access_token(encode_data)
        return {"access_token": access_token, "token_type": "bearer"}


@router.post("/user/thoughtrecord")
async def finish_current_thought_record(current_user: User = Depends(get_current_user)):
    updates = {"activeThoughtRecord": None}
    db.update(updates, current_user["key"])
    return db.get(current_user["key"])
