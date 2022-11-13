from pydantic import BaseModel


class Theme(BaseModel):
    uid: int
    name: str
    file: str
    author: str = 'Lolzteam'
    author_userid: int|None = None
    accent_color: str = '#343434'
    text_color: str = '#d6d6d6'
    active: int = 0 # 0 - inactive, 1 - active
    created_at: int = 0