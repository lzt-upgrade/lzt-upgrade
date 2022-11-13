from sql.themes.service import DbThemesService


class DbThemesController:
    async def init(self):
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbThemesService().init_table()

    async def add_theme(self, name: str, file: str, author: str, author_userid: str = None, accent_color: str = None, text_color: str = None, active: bool = None):
        """Добавляет тему в базу данных"""
        return await DbThemesService().add_theme(name, file, author, author_userid, accent_color, text_color, active)

    async def get_all(self):
        """Возвращает все темы из базы данных"""
        return await DbThemesService().get()

    async def get_by_author(self, author: str):
        """Возвращает темы из базы данных по имени автора"""
        return await DbThemesService().get(author = author)

    async def get_by_author_userid(self, author_userid: str):
        """Возвращает темы из базы данных по айди автора"""
        return await DbThemesService().get(author_userid = author_userid)