from pydantic import BaseModel


class Logo(BaseModel):
    uid: int
    name: str
    preview: str
    target: int = 1
    css: str
    author: str = 'Lolzteam'
    author_userid: int|None = None
    active: int = 0 # 0 - inactive, 1 - active
    created_at: int = 0