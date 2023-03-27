from models.sign import Sign
from sql.signs.service import DbSignsService


class DbSignsController:
    async def init(self) -> bool:
        """Создаёт таблицу в базе данных, если она не существует"""
        return await DbSignsService().init_table()

    async def add_user_signs(self, sign: Sign) -> bool:
        """Добавляет значок в базе данных"""
        return await DbSignsService().add_sign(sign)

    async def get_all(self) -> list[Sign]|bool:
        """Возвращает все значки из базы данных"""
        return await DbSignsService().get()

    async def get_by_system_name(self, system_name: str) -> list[Sign]|bool:
        """Возвращает значок с заданным именем из базы данных"""
        return await DbSignsService().get(system_name = system_name)

    async def get_by_uid(self, uid: int) -> list[Sign]|bool:
        """Возвращает значок по его уникальному ID из базы данных"""
        return await DbSignsService().get(uid = uid)