from typing import Optional
from pydantic import BaseModel, NameEmail


class User(BaseModel):
    email: Optional[NameEmail] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None
