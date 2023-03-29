import logging
from fastapi_utils.tasks import repeat_every

from core.app import app
from sql.user_signs.controller import DbUserSignsController
from sql.signs.controller import DbSignsController
from sql.themes.controller import DbThemesController
from sql.logos.controller import DbLogosController
from utils.themes import save_themes_to_json, check_themes
from utils.logos import save_logos_to_json
from utils.user_signs import save_user_signs_to_json


log = logging.getLogger('worker')

def init_worker():
    @app.on_event('startup')
    async def startup():
        log.info('Worker started')
        await DbUserSignsController().init()
        await DbSignsController().init()
        await DbThemesController().init()
        await DbLogosController().init()
        log.info('DB initialized')

    @app.on_event("startup")
    @repeat_every(seconds = 60 * 10)  # 10 minutes
    async def worker():
        try:
            await check_themes(True)
        except Exception as err:
            log.error(f'Failed to compile themes: {err}')
        await save_themes_to_json()
        await save_logos_to_json()
        await save_user_signs_to_json()