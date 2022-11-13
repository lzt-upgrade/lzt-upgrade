from sql.user_signs.service import DbUserSignsService


class DbUserSignsController:
    async def init(self):
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbUserSignsService().init_table()

    async def add_user_signs(self, userid: int, donater: int, developer: int):
        """Добавляет пользователя в базу данных"""
        return await DbUserSignsService().add_user_signs(userid, donater, developer)

    async def get_all(self):
        """Возвращает значки всех пользователей из базы данных"""
        return await DbUserSignsService().get()

    async def get_by_sign(self, sign: str):
        """Возвращает значки пользователя из базы данных по айди пользователя"""
        match (sign):
            case 'donater':
                return await DbUserSignsService().get(sign = 'donater')
            case 'developer':
                return await DbUserSignsService().get(sign = 'developer')
            case _:
                return []