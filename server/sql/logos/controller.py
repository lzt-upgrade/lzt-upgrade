from sql.logos.service import DbLogosService


class DbLogosController:
    async def init(self):
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbLogosService().init_table()

    async def add_logo(self, name: str, file: str, author: str, author_userid: str = None, accent_color: str = None, text_color: str = None, active: bool = None):
        """Добавляет лого в базу данных"""
        return await DbLogosService().add_logo(name, file, author, author_userid, accent_color, text_color, active)

    async def get_all(self):
        """Возвращает все лого из базы данных"""
        return await DbLogosService().get()

    async def get_by_target(self, target: int = 1):
        """Возвращает лого из базы данных по цели (1 - форум, 2 - маркет)"""
        return await DbLogosService().get(target = target)

    async def get_by_author(self, author: str):
        """Возвращает лого из базы данных по имени автора"""
        return await DbLogosService().get(author = author)

    async def get_by_author_userid(self, author_userid: str):
        """Возвращает лого из базы данных по айди автора"""
        return await DbLogosService().get(author_userid = author_userid)