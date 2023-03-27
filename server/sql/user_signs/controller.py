from sql.user_signs.service import DbUserSignsService


class DbUserSignsController:
    async def init(self):
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbUserSignsService().init_table()

    async def add_user_signs(self, userid: int, signid: int):
        """Добавляет пользователю значок в базе данных"""
        return await DbUserSignsService().add_user_signs(userid, signid)

    async def get_all(self):
        """Возвращает значки всех пользователей из базы данных"""
        return await DbUserSignsService().get()

    async def get_by_signid(self, signid: str):
        """Возвращает пользователей с заданным значком из базы данных"""
        return await DbUserSignsService().get(signid)

    async def get_by_userid(self, userid: str):
        """Возвращает значки пользователя из базы данных по айди пользователя"""
        return await DbUserSignsService().get(userid = userid)