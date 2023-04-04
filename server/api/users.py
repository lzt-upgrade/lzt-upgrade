import httpx
import logging

from config.load import load_cfg

settings = load_cfg()['app']


class Users():
    def __init__(self, access_token: str, hostname = settings['forum_hostname']):
        self.logger = logging.getLogger(__name__)
        self.hostname = hostname
        self.access_token = f'Bearer {access_token}'

    async def me(self):
        """Detail information of a user.

        Required scopes:
            read

        Returns:
        {
            users: [
                (user),
                (user),
                ...
            ]
        }
        """
        try:
            async with httpx.AsyncClient() as client:
                r = await client.get(
                    f'https://api.{self.hostname}/users/me',
                    headers = {
                        'Authorization': self.access_token
                    })
                self.logger.debug(f'GET /users/me: {r.status_code}')
                if r.status_code == 429:
                    self.logger.error('Too many requests. Try again later.')
                    return False
                return r.json()
        except ConnectionAbortedError:
            self.logger.error('The server\'s IP address has been blocked')
            return False
        except Exception as err:
            self.logger.exception(err)
            return False