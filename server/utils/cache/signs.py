import json
import aiofiles
import logging

from sql.signs.controller import DbSignsController

log = logging.getLogger('worker')

async def save_signs_to_json():
    """Сохраняет значки пользователей из базы данных в json файл"""
    signs = await DbSignsController().get_all()
    async with aiofiles.open('config/signs.json', 'w', encoding = 'utf-8') as f:
        await f.write(json.dumps(signs, indent = 4))
        await f.close()
        log.info('Signs successfully saved to json file')

async def get_signs_json():
    try:
        async with aiofiles.open('config/signs.json', 'r', encoding = 'utf-8') as f:
            signs = await f.read()
            return json.loads(signs)
    except FileNotFoundError:
        return []

async def get_signs_by_uid_json(uid: int|None):
    try:
        async with aiofiles.open('config/signs.json', 'r', encoding = 'utf-8') as f:
            signs = await f.read()
            response_json = []
            if signs:
                for sign in json.loads(signs):
                    if sign['uid'] == uid:
                        response_json.append(sign)
            return response_json
    except FileNotFoundError:
        return []

async def get_user_signs_by_system_name_json(system_name: str|None):
    try:
        async with aiofiles.open('config/signs.json', 'r', encoding = 'utf-8') as f:
            signs = await f.read()
            response_json = []
            if signs:
                for sign in json.loads(signs):
                    if sign['system_name'] == system_name:
                        response_json.append(sign)
            return response_json
    except FileNotFoundError:
        return []
