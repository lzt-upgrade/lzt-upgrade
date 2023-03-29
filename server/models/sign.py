from pydantic import BaseModel


class Sign(BaseModel):
    """Класс значка

    Args:
    - uid (int): Уникальный ID значка
    - system_name (str): Отображение в API
    - name (str): Отображение в интерфейсе
    - image_link (str): Ссылка на изображение значка
    """
    uid: int
    system_name: str
    name: str
    image_link: str