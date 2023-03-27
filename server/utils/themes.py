import json
import lesscpy
import logging
import aiofiles
from aiofiles.os import listdir as aiolistdir, remove as aioremove

from sql.themes.controller import DbThemesController

static_folder = 'static/themes'
log = logging.getLogger('worker')


async def get_themes(): 
    """Возвращает список скомпилированных файлов в папке static/themes"""
    files = await aiolistdir(static_folder)
    return files

async def get_source_themes():
    """Возвращает список исходников в папке themes"""
    files = await aiolistdir('themes')
    return files

async def compile_themes():
    """Компилирует темы из папки themes в папку static/themes"""
    files = await get_source_themes()
    compiled_files = await get_themes()
    for file in files:
        if file.endswith('.less') and file not in compiled_files:
            compiled_text = lesscpy.compile(f'themes/{file}', minify = True)
            async with aiofiles.open(f'{static_folder}/{file[:-5]}.css', 'w', encoding = 'utf-8') as f:
                await f.write(compiled_text)
                await f.close()
    log.info('Themes compiled')

async def check_themes(recompile: bool = False):
    """Проверяет наличие тем в папке static/themes и компилирует их, если их там нет"""
    files = await get_source_themes()
    compiled_files = await get_themes()
    for file in compiled_files:
        if recompile or not file.endswith('.css') or file[:-4] + '.less' not in files:
            await aioremove(f'{static_folder}/{file}')
    compiled_files_new = await get_themes()
    for file in files:
        if file.endswith('.less') and file[:-5] + '.css' not in compiled_files_new:
            await compile_themes()
            break

async def save_themes_to_json():
    """Сохраняет темы из базы данных в json файл"""
    themes = await DbThemesController().get_all()
    async with aiofiles.open('config/themes.json', 'w', encoding = 'utf-8') as f:
        await f.write(json.dumps(themes, indent = 4))
        await f.close()

async def get_themes_json():
    try:
        async with aiofiles.open('config/themes.json', 'r', encoding = 'utf-8') as f:
            themes = await f.read()
            return json.loads(themes)
    except FileNotFoundError:
        return []