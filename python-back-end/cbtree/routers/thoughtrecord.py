from fastapi import APIRouter, Depends, HTTPException, status
from typing import Optional, List
from pydantic import BaseModel, EmailStr
from models.user import User
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
    emotion: Optional[str]
    mood: Optional[List[Mood]] = None
    thoughts: Optional[Thoughts] = None
    rerateemotion: Optional[str] = None
    situationquestion: Optional[str] = None
    evidencefor: Optional[str] = None
    evidenceagainst: Optional[str] = None
    alternativethought: Optional[List[Mood]] = None


class Thought_Record(New_Thought_Record):
    key: str

@router.get("/thoughtrecord/all")
async def get_all_thought_records(user: User = Depends(get_current_user)):
    record_ids = user["thoughtRecords"]
    records = map(lambda record: db.get(record), record_ids)
    return list(records)
    



@router.get("/thoughtrecord/{thought_id}", response_model=Thought_Record)
async def get_thoughtrecord_by_id(
    thought_id: str, user: User = Depends(get_current_user)
):
    thought_record: Thought_Record | None = db.get(thought_id)
    user_key = user["key"]
    if thought_record is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Thought record doesn't exist",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if user_key == thought_record["userKey"]:
        return thought_record
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="thought record doesn't belong to user",
            headers={"WWW-Authenticate": "Bearer"},
        )

@router.post("/thoughtrecord/edit/{thought_id}", response_model=Thought_Record)
async def set_active_thoughtrecord_by_id(
    thought_record: Thought_Record = Depends(get_thoughtrecord_by_id),
    user: User = Depends(get_current_user)
    ):
    user_key = user['key']
    db.update({"activeThoughtRecord":thought_record["key"]},user_key)
    return thought_record

@router.get("/thoughtrecord", response_model=Thought_Record)
async def get_active_thought_record(user: User = Depends(get_current_user)):
    if not user["activeThoughtRecord"]:
        return await new_thought_record(user["key"])
    return db.get(user["activeThoughtRecord"])


@router.post("/thoughtrecord", response_model=Thought_Record)
async def new_thought_record(user_key: str = Depends(get_user_key)):
    current_time = get_current_utc_time_miliseconds()
    new_thought_record = New_Thought_Record(userKey=user_key, timeCreated=current_time)
    thought_record: Thought_Record = db.put(new_thought_record.dict())
    print(thought_record["key"])
    print(user_key)
    db.update(
        {
            "activeThoughtRecord": thought_record["key"],
            "thoughtRecords": db.util.append(thought_record["key"]),
        },
        user_key,
    )
    return thought_record


@router.delete("/thoughtrecord/{thought_id}")
async def delete_thought_record(thought_id: str, user: User = Depends(get_current_user)):
    record_ids = user["thoughtRecords"]
    print(record_ids)
    print(thought_id)
    record_ids.remove(thought_id)
    db.update({"thoughtRecords": record_ids}, user["key"])
    db.delete(thought_id)
    return f'successfully deleted ${thought_id}' 

@router.patch("/thoughtrecord/{thought_id}", response_model=Thought_Record)
async def update_thought_record(
    updates: dict, thought_record: Thought_Record = Depends(get_thoughtrecord_by_id)
):
    db.update(updates, thought_record["key"])
    return db.get(thought_record["key"])
