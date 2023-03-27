import logging
import aiomysql

from models.sign import Sign
from sql.db import DefaultConnector


class DbSignsService:
    def __init__(self) -> None:
        self.database_sc: str = 'lzt_signs' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('mysql')

    async def init_table(self) -> bool:
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute("""CREATE TABLE IF NOT EXISTS `lzt_signs` (
                        `uid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        `system_name` VARCHAR(64) NOT NULL,
                        `name` VARCHAR(64) NOT NULL,
                        `image_link` VARCHAR(512) NOT NULL
                    )""")
                    return True
            except Exception as err:
                self.log.exception(f'Failed to init table in database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failled connection to database')
        return False

    async def add_sign(self, sign: Sign) -> bool:
        """Добавляет значок в базу данных

        Args:
            sign: Объект значка

        Returns:
            True: Если удалось добавить значок
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute('INSERT INTO `lzt_signs` (`system_name`, `name`, `image_link`) VALUES (%s, %s, %s)', (sign.system_name, sign.name, sign.image_link))
                    await db.commit()
                    return True
            except Exception as err:
                self.log.exception(f'Failed to add a sign to the database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failled connection to database')
        return False

    async def get(self, system_name: str|None = None, uid: int|None = None) -> list[Sign]|bool:
        """Возвращает значки из базы данных

        Args:
            system_name: системное имя значка
            uid: уникальный ID значка

        Returns:
            data: Если удалось получить данные
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    if system_name:
                        await cursor.execute('SELECT * FROM `lzt_signs` WHERE `system_name` = %s', (system_name, ))
                    elif uid:
                        await cursor.execute('SELECT * FROM `lzt_signs` WHERE `uid` = %s', (uid, ))
                    else:
                        await cursor.execute('SELECT * FROM `lzt_signs`')
                    result = await cursor.fetchall()
                    return result
            except Exception as err:
                self.log.exception(f'Failed to get signs (system_name: {system_name}, uid: {uid}) from database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failled connection to database')
        return False