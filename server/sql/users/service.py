import logging
import time

from sql.db import DefaultConnector


class DbUsersService:
    def __init__(self) -> None:
        self.database_sc = 'lzt_users' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('server')

    async def init_table(self):
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                await cursor.execute("""CREATE TABLE IF NOT EXISTS `lzt_users` (
                    `uid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    `userid` INT NOT NULL,
                    `password` VARCHAR(512) NOT NULL,
                    `group` INT NOT NULL DEFAULT 1,
                    `created_at` INT NOT NULL DEFAULT 0
                )""")
                return True
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to init table in database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None

    async def add_user(self, userid: int, password: str, group: int):
        """Добавляет пользователя в базу данных

        Args:
            userid: id пользователя с лолза
            password: пароль пользователя для взаимодействия с API расширения (не с лолза !!!)
            group: группа пользователей (1 - пользователь, 2 - ..., 3 - разработчик)

        Returns:
            True: Если удалось добавить пользователя
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                timestamp = int(time.time())
                await cursor.execute('INSERT INTO `lzt_users` (`userid`, `password`, `group`, `signs`, `created_at`) VALUES (%s)', (userid, password, group, timestamp))
                await db.commit()
                return True
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to add a user to the database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None

    async def get(self, userid: int = None, group: int = None):
        """Возвращает пользователя из базы данных

        Args:
            userid: id пользователя (default: None)
            group: группа пользователя (default: None)

        Returns:
            data: Если удалось получить данные
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                if userid and type(userid) == int:
                    await cursor.execute('SELECT * FROM `lzt_users` WHERE `userid` = %s', (userid, ))
                    result = await cursor.fetchone()
                elif group and type(group) == int:
                    await cursor.execute('SELECT * FROM `lzt_users` WHERE `group` = %s', (group, ))
                    result = await cursor.fetchall()
                else:
                    await cursor.execute('SELECT * FROM `lzt_users`')
                    result = await cursor.fetchall()
                return result
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to get user (userid: {userid}) from database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None