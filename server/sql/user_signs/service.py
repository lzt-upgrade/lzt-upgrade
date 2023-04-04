import logging
import aiomysql

from models.user_sign import UserSign
from sql.db import DefaultConnector


class DbUserSignsService:
    def __init__(self) -> None:
        self.database_sc: str = 'lzt_user_signs' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('mysql')

    async def init_table(self) -> bool:
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute("""CREATE TABLE IF NOT EXISTS `lzt_user_signs` (
                        `uid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        `userid` INT NOT NULL,
                        `signid` INT NOT NULL,
                        `created_at` BIGINT NOT NULL DEFAULT (UNIX_TIMESTAMP())
                    )""")
                    return True
            except Exception as err:
                self.log.exception(f'Failed to init table in database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False

    async def add_user_sign(self, user_sign: UserSign) -> bool:
        """Добавляет пользователю значок в базу данных

        Args:
            user_sign (UserSign): Объект пользовательского значка

        Returns:
            True: Если удалось добавить пользователя
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute('INSERT INTO `lzt_user_signs` (`userid`, `signid`, `created_at`) VALUES (%s, %s, %s)',
                                        (user_sign.userid, user_sign.signid, user_sign.created_at))
                    await db.commit()
                    return True
            except Exception as err:
                self.log.exception(f'Failed to add a user sign to the database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False

    async def get(self, signid: int|None = None, userid: int|None = None) -> list[UserSign]|bool:
        """Возвращает пользовательские значки из базы данных

        Args:
            signid (int|None): id значка
            userid (int|None): id пользователя

        Returns:
            data: Если удалось получить данные
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    if signid:
                        await cursor.execute('SELECT * FROM `lzt_user_signs` WHERE `signid` = %s', (signid, ))
                    elif userid:
                        await cursor.execute('SELECT * FROM `lzt_user_signs` WHERE `userid` = %s', (userid, ))
                    else:
                        await cursor.execute('SELECT * FROM `lzt_user_signs`')
                    result = await cursor.fetchall()
                    return result
            except Exception as err:
                self.log.exception(f'Failed to get user signs (signid: {signid}, userid: {userid}) from database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False