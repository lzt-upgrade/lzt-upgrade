import json
import aiofiles
import logging

from sql.user_signs.controller import DbUserSignsController

log = logging.getLogger('worker')

async def save_user_signs_to_json():
    """Сохраняет значки пользователей из базы данных в json файл"""
    user_signs = await DbUserSignsController().get_all()
    async with aiofiles.open('config/user_signs.json', 'w', encoding = 'utf-8') as f:
        await f.write(json.dumps(user_signs, indent = 4))
        await f.close()
        log.info('User sign successfully saved to json file')

async def get_user_signs_json():
    try:
        async with aiofiles.open('config/user_signs.json', 'r', encoding = 'utf-8') as f:
            user_signs = await f.read()
            return json.loads(user_signs)
    except FileNotFoundError:
        return []

async def get_user_signs_by_userid_json(userid: int|None):
    try:
        async with aiofiles.open('config/user_signs.json', 'r', encoding = 'utf-8') as f:
            user_signs = await f.read()
            response_json = []
            if user_signs:
                for user_sign in json.loads(user_signs):
                    if user_sign['userid'] == userid:
                        response_json.append(user_sign)
            return response_json
    except FileNotFoundError:
        return []

async def get_user_signs_by_signid_json(signid: int|None):
    try:
        async with aiofiles.open('config/user_signs.json', 'r', encoding = 'utf-8') as f:
            user_signs = await f.read()
            response_json = []
            if user_signs:
                for user_sign in json.loads(user_signs):
                    if user_sign['signid'] == signid:
                        response_json.append(user_sign)
            return response_json
    except FileNotFoundError:
        return []
