from models.logo import Logo
from sql.logos.service import DbLogosService


class DbLogosController:
    async def init(self) -> bool:
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbLogosService().init_table()

    async def add_logo(self, logo: Logo) -> bool:
        """Добавляет лого в базу данных"""
        return await DbLogosService().add_logo(logo)

    async def get_all(self) -> list[Logo]|bool:
        """Возвращает все лого из базы данных"""
        return await DbLogosService().get()

    async def get_by_target(self, target: int = 1) -> list[Logo]|bool:
        """Возвращает лого из базы данных по цели (1 - форум, 2 - маркет)"""
        return await DbLogosService().get(target = target)

    async def get_by_author(self, author: str) -> list[Logo]|bool:
        """Возвращает лого из базы данных по имени автора"""
        return await DbLogosService().get(author = author)

    async def get_by_author_userid(self, author_userid: int) -> list[Logo]|bool:
        """Возвращает лого из базы данных по айди автора"""
        return await DbLogosService().get(author_userid = author_userid)