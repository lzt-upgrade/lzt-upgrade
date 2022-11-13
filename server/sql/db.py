import os
import logging
import asyncio
import aiomysql


class DefaultConnector:

    def __init__(self):
        self._host = os.environ.get('MYSQL_HOST')
        self._db = os.environ.get('MYSQL_DB')
        self._user = os.environ.get('MYSQL_USER')
        self._pass = os.environ.get('MYSQL_PASS')
        self.log = logging.getLogger('server')
        self.loop = asyncio.get_event_loop()

    async def connect(self):
        try:
            db = await aiomysql.connect(host = self._host,
                                        user = self._user,
                                        password = self._pass,
                                        db = self._db,
                                        auth_plugin = 'mysql_native_password',
                                        charset = 'utf8',
                                        connect_timeout = 30,
                                        cursorclass = aiomysql.DictCursor
                                    )
            return db
        except aiomysql.OperationalError as err:
            self.log.error('Failed to connect to database \"Can`t connect to MySQL Server\"')
            return False
        except Exception as err:
            self.log.error('Failed to connect to database \"Raw reason\"')
            self.log.exception(f'Failed to connect to database: {err}')
            return None