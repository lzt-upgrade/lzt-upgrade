import logging
import time

from sql.db import DefaultConnector


class DbThemesService:
    def __init__(self) -> None:
        self.database_sc = 'lzt_themes' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('server')

    async def init_table(self):
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                await cursor.execute("""CREATE TABLE IF NOT EXISTS `lzt_themes` (
                    `uid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    `name` VARCHAR(512) NOT NULL,
                    `file` VARCHAR(512) NOT NULL,
                    `author` VARCHAR(512) NOT NULL DEFAULT 'Lolzteam',
                    `author_userid` VARCHAR(128) DEFAULT NULL,
                    `accent_color` VARCHAR(32) NOT NULL DEFAULT '#343434',
                    `text_color` VARCHAR(32) NOT NULL DEFAULT '#d6d6d6',
                    `active` TINYINT(1) NOT NULL DEFAULT 0,
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

    async def add_theme(self, name: str, file: str, author: str, author_userid: str, accent_color: str, text_color: str, active: bool):
        """Добавляет тему в базу данных

        Args:
            name: имя темы
            file: имя файла
            author: имя автора (если авторов больше одного, то через запятую)
            author_userid: id автора (если авторов больше одного, то через запятую)
            accent_color: цвет акцента (задний фон и обводка)
            text_color: цвет текста
            active: активна ли тема

        Returns:
            True: Если удалось добавить тему
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                timestamp = int(time.time())
                await cursor.execute('INSERT INTO `lzt_themes` (`name`, `file`, `author`, `author_userid`, `accent_color`, `text_color`, `active`, `created_at`) VALUES (%s)', (name, file, author, author_userid, accent_color, text_color, active, timestamp))
                await db.commit()
                return True
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to add a theme to the database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None

    async def get(self, author: str = None, author_userid: str = None):
        """Возвращает темы из базы данных

        Args:
            author: имя автора (default: None)
            author_userid: id автора (default: None)

        Returns:
            data: Если удалось получить данные
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                if author and type(author) == str:
                    await cursor.execute('SELECT * FROM `lzt_themes` WHERE `author` = %s', (author, ))
                elif author_userid and type(author_userid) == int:
                    await cursor.execute('SELECT * FROM `lzt_themes` WHERE `author_userid` = %s', (author_userid, ))
                else:
                    await cursor.execute('SELECT * FROM `lzt_themes`')
                result = await cursor.fetchall()
                return result
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to get theme (author: {author}, author_userid: {author_userid}) from database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None