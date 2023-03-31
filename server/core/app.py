from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from config.load import load_cfg

settings = load_cfg()
limiter = Limiter(key_func=get_remote_address)

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="LZT Upgrade",
        version=settings['app']['version'],
        description="API for interaction between the extension and our server",
        terms_of_service="/terms/",
        license_info = {
            "name": "MIT",
        },
        routes = app.routes,
    )
    openapi_schema["info"]["x-logo"] = {
        "url": "/static/assets/logos/logo.svg"
    }
    app.openapi_schema = openapi_schema
    return app.openapi_schema

tags_meta = [
    {
        'name': 'Themes',
        'description': 'Operations with themes for the extension'
    },
    {
        'name': 'Logos',
        'description': 'Operations with logos for the extension'
    },
    {
        'name': 'Users',
        'description': 'Operations with users for the extension'
    },
    {
        'name': 'Signs',
        'description': 'Operations with users for the extension'
    },
]

app = FastAPI(openapi_tags = tags_meta, openapi_url = '/api/openapi.json', docs_url = '/api/docs', redoc_url = '/api/redoc')
app.mount('/static', StaticFiles(directory = 'static'), name = 'static')
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.openapi = custom_openapi
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)