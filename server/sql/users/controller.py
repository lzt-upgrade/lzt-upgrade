from models.user import User
from sql.users.service import DbUsersService


class DbUsersController:
    async def init(self) -> bool:
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbUsersService().init_table()

    async def add_user(self, user: User) -> bool:
        """Добавляет пользователя в базе данных"""
        return await DbUsersService().add_user(user)

    async def get_all(self) -> list[User]|bool:
        """Возвращает всех пользователей из базы данных"""
        return await DbUsersService().get()

    async def get_by_userid(self, userid: int) -> list[User]|bool:
        """Возвращает пользователя из базы данных по айди пользователя"""
        return await DbUsersService().get(userid = userid)

    async def update_user(self, user: User) -> bool:
        """Обновяет пользователя в базе данных"""
        return await DbUsersService().update(user)