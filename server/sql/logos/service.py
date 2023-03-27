import logging
import aiomysql

from models.logo import Logo
from sql.db import DefaultConnector


class DbLogosService:
    def __init__(self) -> None:
        self.database_sc: str = 'lzt_logos' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('mysql')

    async def init_table(self) -> bool:
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute("""CREATE TABLE IF NOT EXISTS `lzt_logos` (
                        `uid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        `name` VARCHAR(512) NOT NULL,
                        `preview` VARCHAR(512) NOT NULL,
                        `target` INT NOT NULL DEFAULT 1,
                        `css` VARCHAR(2048) NOT NULL,
                        `author` VARCHAR(512) NOT NULL DEFAULT 'Lolzteam',
                        `author_userid` VARCHAR(128) DEFAULT NULL,
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

    async def add_logo(self, logo: Logo) -> bool:
        """Добавляет лого в базу данных

        Args:
            logo (Logo): объект логотипа

        Returns:
            True: Если удалось добавить лого
            False: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        if type(db) is aiomysql.Connection:
            try:
                async with db.cursor() as cursor:
                    await cursor.execute('INSERT INTO `lzt_logos` (`name`, `preview`, `target`, `css`, `author`, `author_userid`, `active`, `created_at`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)',
                                        (logo.name, logo.preview, logo.target, logo.css, logo.author, logo.author_userid, logo.active, logo.created_at))
                    await db.commit()
                    return True
            except Exception as err:
                self.log.exception(f'Failed to add a logo to the database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False

    async def get(self, target: int|None = None, author: str|None = None, author_userid: int|None = None) -> list[Logo]|bool:
        """Возвращает лого из базы данных

        Args:
            target (int|None): цель лого (1 - форум, 2 - маркет)
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
                    if target:
                        await cursor.execute('SELECT * FROM `lzt_logos` WHERE `target` = %s', (target, ))
                    elif author:
                        await cursor.execute('SELECT * FROM `lzt_logos` WHERE `author` = %s', (author, ))
                    elif author_userid:
                        await cursor.execute('SELECT * FROM `lzt_logos` WHERE `author_userid` = %s', (author_userid, ))
                    else:
                        await cursor.execute('SELECT * FROM `lzt_logos`')
                    result = await cursor.fetchall()
                    return result
            except Exception as err:
                self.log.exception(f'Failed to get logos (author: {author}, author_userid: {author_userid}, target: {target}) from database ({self.database_sc}): {err}')
                return False
            finally:
                db.close()
        self.log.error(f'Failed connection to database')
        return False