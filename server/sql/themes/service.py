import logging
import aiomysql

from models.theme import Theme
from sql.db import DefaultConnector


class DbThemesService:
    def __init__(self) -> None:
        self.database_sc: str = 'lzt_themes' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('mysql')

    async def init_table(self) -> bool:
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
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
                        `created_at` INT NOT NULL DEFAULT (UNIX_TIMESTAMP())
                    )""")
                    return True
            except Exception as err:
                self.log.exception(f'Failed to init table in database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False

    async def add_theme(self, theme: Theme) -> bool:
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
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute('INSERT INTO `lzt_themes` (`name`, `file`, `author`, `author_userid`, `accent_color`, `text_color`, `active`, `created_at`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)',
                                        (theme.name, theme.file, theme.author, theme.author_userid, theme.accent_color, theme.text_color, theme.active, theme.created_at))
                    await db.commit()
                    return True
            except Exception as err:
                self.log.exception(f'Failed to add a theme to the database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False

    async def get(self, author: str|None = None, author_userid: int|None = None) -> list[Theme]|bool:
        """Возвращает темы из базы данных

        Args:
            author (str|None): имя автора
            author_userid (int|None): id автора

        Returns:
            data: Если удалось получить данные
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
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
            except Exception as err:
                self.log.exception(f'Failed to get theme (author: {author}, author_userid: {author_userid}) from database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False