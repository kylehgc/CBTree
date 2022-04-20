from re import S
from fastapi import APIRouter, Depends, HTTPException, status
from typing import Optional, List
from pydantic import BaseModel, EmailStr
from routers.auth import get_current_user, get_user_key
from datetime import datetime
from database import db
import time

def get_current_utc_time_miliseconds():
    now = datetime.utcnow()
    return int(time.mktime(now.timetuple())) * 1000

router = APIRouter()

class Mood(BaseModel): 
    mood: str
    moodRating: int

class Thoughts(BaseModel): 
    thoughts: list[Mood]
    hotThought: str


class New_Thought_Record(BaseModel):
    timeCreated: int
    userKey: str
    mood: Optional[List[Mood]] = None 
    thoughts: Optional[Thoughts] = None
    rerateMood: Optional[List[Mood]] = None
    situationquestion: Optional[str] = None
    evidencefor: Optional[str] = None
    evidenceAgainst: Optional[str] = None
    alternativeThoughts: Optional[List[Mood]] = None

class Thought_Record(New_Thought_Record):
    key: str
     
         


class User(BaseModel):
    key: str
    username: EmailStr
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    password: str
    active_thought_record: Optional[str] = None
    thoughtRecords: Optional[List[str]] = []


@router.get("/thoughtrecord/{thought_id}", response_model=Thought_Record)
async def get_thoughtrecord(thought_id:str, user: User = Depends(get_current_user)):
    thought_record: Thought_Record | None = db.get(thought_id)
    user_key = user["key"]
    if thought_record is None:
         raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Thought record doesn't exist",
            headers={"WWW-Authenticate": "Bearer"})
    
    if user_key == thought_record["userKey"]:
        return thought_record
    else:
         raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="thought record doesn't belong to user",
            headers={"WWW-Authenticate": "Bearer"})
    
@router.post("/thoughtrecord/", response_model=Thought_Record)
async def new_thought_record(user_key: str = Depends(get_user_key)):
    current_time = get_current_utc_time_miliseconds()
    new_thought_record = New_Thought_Record(userKey=user_key, 
        timeCreated=current_time) 
    thought_record: Thought_Record = db.put(new_thought_record.dict())
    print(thought_record["key"])
    print(user_key)
    db.update({
         "active_thought_record":thought_record["key"], 
         "thoughtRecords": db.util.append(thought_record["key"])}
     , user_key)
    return thought_record

@router.patch("/thoughtrecord/{thought_id}", response_model=Thought_Record)
async def update_thought_record(
    updates: dict,  
    thought_record: Thought_Record = Depends(get_thoughtrecord)):
    db.update(updates, thought_record["key"])
    return db.get(thought_record["key"])
