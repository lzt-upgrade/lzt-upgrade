import logging

from sql.db import DefaultConnector


class DbUserSignsService:
    def __init__(self) -> None:
        self.database_sc = 'lzt_user_signs' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('server')

    async def init_table(self):
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                await cursor.execute("""CREATE TABLE IF NOT EXISTS `lzt_user_signs` (
                    `uid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    `userid` INT NOT NULL,
                    `signid` INT NOT NULL,
                    `created_at` BIGINT NOT NULL DEFAULT (UNIX_TIMESTAMP())
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

    async def add_user_signs(self, userid: int, signid: int):
        """Добавляет пользователю значки в базу данных

        Args:
            userid: id пользователя с лолза
            signid: id значка

        Returns:
            True: Если удалось добавить пользователя
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                await cursor.execute('INSERT INTO `lzt_user_signs` (`userid`, `signid`) VALUES (%s, %s)', (userid, signid))
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

    async def get(self, signid: int|None = None, userid: int|None = None):
        """Возвращает пользовательские значки из базы данных

        Args:
            signid: id значка

        Returns:
            data: Если удалось получить данные
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
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
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to get user signs (signid: {signid}, userid: {userid}) from database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None