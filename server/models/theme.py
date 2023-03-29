import time
from pydantic import BaseModel


class Theme(BaseModel):
    """Класс темы

    Args:
    - uid (int): ID темы
    - name (str): имя логотипа
    - file (str): имя CSS файла на сервере
    - author (str): имя автора (если авторов больше одного, то через запятую)
    - author_userid (int|None): id автора (если авторов больше одного, то через запятую)
    - accent_color (str): цвет заднего фона в блоке выбора тем
    - text_color (str): цвет текста в блоке выбора тем
    - active (int): активен ли логотип
    - created_at (int): время создания
    """
    uid: int
    name: str
    file: str
    author: str = 'Lolzteam'
    author_userid: int|None = None
    accent_color: str = '#343434'
    text_color: str = '#d6d6d6'
    active: int = 0 # 0 - inactive, 1 - active
    created_at: int = int(time.time())