from sql.users.service import DbUsersService


class DbUsersController:
    async def init(self):
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbUsersService().init_table()

    async def add_user(self, userid: int, password: str, group: int = 0):
        """Добавляет пользователя в базу данных"""
        return await DbUsersService().add_user(userid, password, group)

    async def get_all(self):
        """Возвращает всех пользователей из базы данных"""
        return await DbUsersService().get()

    async def get_by_userid(self, userid: int):
        """Возвращает пользователя из базы данных по айди пользователя"""
        return await DbUsersService().get(userid = userid)

    async def get_by_group(self, group: int):
        """Возвращает пользователей из базы данных по группе пользователя"""
        return await DbUsersService().get(group = group)
