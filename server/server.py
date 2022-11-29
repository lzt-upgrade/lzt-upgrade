from hypercorn.config import Config

from core.app import app
from logger.main import init_logging
from routes import api_router

from worker import init_worker

app.include_router(api_router)

async def start():
    config = Config().from_pyfile('config/hypercorn_config.py')
    init_logging()
    init_worker()
    return config