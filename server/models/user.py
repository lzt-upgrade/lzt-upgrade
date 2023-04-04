import time
from pydantic import BaseModel


class User(BaseModel):
    """Класс пользователя

    Args:
    - uid (int): ID пользовательского значка
    - userid (int): ID пользователя
    - access_token (str): Токен пользователя (зашифрованный)
    - expires_in (int): Время истечения
    - created_at (int): Время создания
    """
    uid: int
    userid: int
    access_token: str
    expires_in: int
    created_at: int = int(time.time())