import time
from pydantic import BaseModel


class UserSign(BaseModel):
    """Класс пользовательского значка

    Args:
        uid (int): ID пользовательского значка
        userid (int): ID пользователя
        signid (int): ID значка
        created_at (int): Время создания
    """
    uid: int
    userid: int
    signid: int
    created_at: int = int(time.time())