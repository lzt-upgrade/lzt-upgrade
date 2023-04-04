import logging
import aiomysql

from models.user import User
from sql.db import DefaultConnector


class DbUsersService:
    def __init__(self) -> None:
        self.database_sc: str = 'lzt_users' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('mysql')

    async def init_table(self) -> bool:
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute("""CREATE TABLE IF NOT EXISTS `lzt_users` (
                        `uid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        `userid` INT NOT NULL,
                        `access_token` VARCHAR(1024) NOT NULL,
                        `expires_in` BIGINT NOT NULL,
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

    async def add_user(self, user: User) -> bool:
        """Добавляет пользователя в базу данных

        Args:
            user (User): Объект пользователя

        Returns:
            True: Если удалось добавить пользователя
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute('INSERT INTO `lzt_users` (`userid`, `access_token`, `expires_in`, `created_at`) VALUES (%s, %s, %s, %s)',
                                        (user.userid, user.access_token, user.expires_in, user.created_at))
                    await db.commit()
                    return True
            except Exception as err:
                self.log.exception(f'Failed to add a user to the database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False

    async def get(self, userid: int|None = None) -> list[User]|bool:
        """Возвращает пользователей из базы данных

        Args:
            userid (int|None): id пользователя

        Returns:
            data: Если удалось получить данные
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    if userid:
                        await cursor.execute('SELECT * FROM `lzt_users` WHERE `userid` = %s', (userid, ))
                    else:
                        await cursor.execute('SELECT * FROM `lzt_users`')
                    result = await cursor.fetchall()
                    return result
            except Exception as err:
                self.log.exception(f'Failed to get user (userid: {userid}) from database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False

    async def update(self, user: User) -> bool:
        """Обновляет пользователя в базе данных

        Args:
            user (User): Обновленный объект пользователя

        Returns:
            data: Если удалось обновить данные
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute('UPDATE `lzt_users` SET `access_token` = %s, `expires_in` = %s WHERE `userid` = %s', (user.access_token, user.expires_in, user.userid))
                    await db.commit()
                    return True
            except Exception as err:
                self.log.exception(f'Failed to update user (userid: {user.userid}) in database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False