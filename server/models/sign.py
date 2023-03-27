from pydantic import BaseModel


class Sign(BaseModel):
    uid: int
    name: str
    image_link: str