from models.user_sign import UserSign
from sql.user_signs.service import DbUserSignsService


class DbUserSignsController:
    async def init(self) -> bool:
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbUserSignsService().init_table()

    async def add_user_signs(self, user_sign: UserSign) -> bool:
        """Добавляет пользователю значок в базе данных"""
        return await DbUserSignsService().add_user_sign(user_sign)

    async def get_all(self) -> list[UserSign]|bool:
        """Возвращает значки всех пользователей из базы данных"""
        return await DbUserSignsService().get()

    async def get_by_signid(self, signid: int) -> list[UserSign]|bool:
        """Возвращает пользователей с заданным значком из базы данных"""
        return await DbUserSignsService().get(signid = signid)

    async def get_by_userid(self, userid: int) -> list[UserSign]|bool:
        """Возвращает значки пользователя из базы данных по айди пользователя"""
        return await DbUserSignsService().get(userid = userid)