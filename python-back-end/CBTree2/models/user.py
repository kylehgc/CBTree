from pydantic import BaseModel, NameEmail
from typing import Optional


class User(BaseModel):
    email: Optional[NameEmail] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None
