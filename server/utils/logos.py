import json
import aiofiles
import logging

from aiofiles.os import remove as aioremove
from sql.logos.controller import DbLogosController

static_folder = 'static/themes'
log = logging.getLogger('worker')

async def save_logos_to_json():
    """Сохраняет темы из базы данных в json файл"""
    logos = await DbLogosController().get_all()
    async with aiofiles.open('config/logos.json', 'w', encoding = 'utf-8') as f:
        await f.write(json.dumps(logos, indent = 4))
        await f.close()

async def get_logos_json(target = None):
    try:
        async with aiofiles.open('config/logos.json', 'r', encoding = 'utf-8') as f:
            logos = await f.read()
            if target:
                response_json = []
                if logos:
                    for logo in json.loads(logos):
                        if logo['target'] == target:
                            response_json.append(logo)
                return response_json
            return json.loads(logos)
    except FileNotFoundError:
        return []

async def get_logo_by_json(uid: int):
    logos = await get_logos_json()
    if logos:
        for logo in logos:
            if logo['uid'] == uid:
                return logo
    return {}