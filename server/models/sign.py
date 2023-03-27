from pydantic import BaseModel


class Sign(BaseModel):
    uid: int
    system_name: str
    name: str
    image_link: str