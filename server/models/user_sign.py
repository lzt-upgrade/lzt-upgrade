from pydantic import BaseModel


class UserSign(BaseModel):
    uid: int
    userid: int
    signid: int
    created_at: int