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
                    `donater` INT NOT NULL DEFAULT 0,
                    `developer` INT NOT NULL DEFAULT 0
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

    async def add_user_signs(self, userid: int, donater: int, developer: int):
        """Добавляет пользователю значки в базу данных

        Args:
            userid: id пользователя с лолза
            donater: галочка донатера
            developer: галочка разработчика

        Returns:
            True: Если удалось добавить пользователя
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                await cursor.execute('INSERT INTO `lzt_user_signs` (`userid`, `donater`, `developer`) VALUES (%s)', (userid, donater, developer))
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

    async def get(self, sign: str = None):
        """Возвращает пользовательские значки из базы данных

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
                match (sign):
                    case 'donater':
                        await cursor.execute('SELECT * FROM `lzt_user_signs` WHERE `donater` = %s', (1, ))
                    case 'developer':
                        await cursor.execute('SELECT * FROM `lzt_user_signs` WHERE `developer` = %s', (1, ))
                    case _:
                        await cursor.execute('SELECT * FROM `lzt_user_signs`')
                result = await cursor.fetchall()
                return result
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to get user signs (sign: {sign}) from database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None