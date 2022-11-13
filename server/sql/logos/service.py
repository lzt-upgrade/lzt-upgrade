import logging
import time

from sql.db import DefaultConnector


class DbLogosService:
    def __init__(self) -> None:
        self.database_sc = 'lzt_logos' # Название таблицы в базе данных (для логов)
        self.log = logging.getLogger('server')

    async def init_table(self):
        """Создает таблицу в базе данных для правильной работы"""
        db = await DefaultConnector().connect()
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

    async def add_logo(self, name: str, preview: str, target: int, css: str, author: str, author_userid: str, active: bool):
        """Добавляет лого в базу данных

        Args:
            name: имя лого
            preview: прямая ссылка на лого (превьюшка в меню)
            target: цель лого (1 - форум, 2 - маркет)
            css: применяемый css
            author: имя автора (если авторов больше одного, то через запятую)
            author_userid: id автора (если авторов больше одного, то через запятую)
            active: активен ли логотип

        Returns:
            True: Если удалось добавить лого
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                timestamp = int(time.time())
                await cursor.execute('INSERT INTO `lzt_logos` (`name`, `preview`, `target`, `css`, `author`, `author_userid`, `active`, `created_at`) VALUES (%s)', (name, preview, target, css, author, author_userid, active, timestamp))
                await db.commit()
                return True
        except AttributeError as err:
            self.log.error(f'Failled connection to database: {err}')
            return None
        except Exception as err:
            self.log.exception(f'Failed to add a logo to the database ({self.database_sc}): {err}')
            return None
        finally:
            db.close() if db else None

    async def get(self, target: int = None, author: str = None, author_userid: str = None):
        """Возвращает лого из базы данных

        Args:
            target: цель лого (1 - форум, 2 - маркет)
            author: имя автора (default: None)
            author_userid: id автора (default: None)

        Returns:
            data: Если удалось получить данные
            None: Если произошла ошибка
        """
        db = await DefaultConnector().connect()
        try:
            async with db.cursor() as cursor:
                if target and type(target) == int:
                    await cursor.execute('SELECT * FROM `lzt_logos` WHERE `target` = %s', (target, ))
                elif author and type(author) == str:
                    await cursor.execute('SELECT * FROM `lzt_logos` WHERE `author` = %s', (author, ))
                elif author_userid and type(author_userid) == int:
                    await cursor.execute('SELECT * FROM `lzt_logos` WHERE `author_userid` = %s', (author_userid, ))
                else:
                    await cursor.execute('SELECT * FROM `lzt_logos`')
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