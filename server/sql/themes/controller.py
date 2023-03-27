from models.theme import Theme
from sql.themes.service import DbThemesService


class DbThemesController:
    async def init(self) -> bool:
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbThemesService().init_table()

    async def add_theme(self, theme: Theme) -> bool:
        """Добавляет тему в базу данных"""
        return await DbThemesService().add_theme(theme)

    async def get_all(self) -> list[Theme]|bool:
        """Возвращает все темы из базы данных"""
        return await DbThemesService().get()

    async def get_by_author(self, author: str) -> list[Theme]|bool:
        """Возвращает темы из базы данных по имени автора"""
        return await DbThemesService().get(author = author)

    async def get_by_author_userid(self, author_userid: int) -> list[Theme]|bool:
        """Возвращает темы из базы данных по айди автора"""
        return await DbThemesService().get(author_userid = author_userid)