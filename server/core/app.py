from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="LZT Upgrade",
        version="1.0.0",
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