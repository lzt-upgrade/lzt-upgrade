import time
from pydantic import BaseModel


class Logo(BaseModel):
    """Класс логотипа

    Args:
    - uid (int): ID логотипа
    - name (str): имя логотипа
    - preview (str): прямая ссылка на лого (превьюшка в меню)
    - target (int): цель лого (1 - форум, 2 - маркет)
    - css (str): применяемый css
    - author (str): имя автора (если авторов больше одного, то через запятую)
    - author_userid (int|None): id автора (если авторов больше одного, то через запятую)
    - active (int): активен ли логотип
    - created_at (int): время создания
    """
    uid: int
    name: str
    preview: str
    target: int = 1
    css: str
    author: str = 'Lolzteam'
    author_userid: int|None = None
    active: int = 0 # 0 - inactive, 1 - active
    created_at: int = int(time.time())