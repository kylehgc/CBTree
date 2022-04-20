from typing import Optional, List
from pydantic import BaseModel, EmailStr, NameEmail

class User(BaseModel):
    username: EmailStr
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    password: str
    active_thought_record: Optional[str] = None
    thoughtRecords = []
