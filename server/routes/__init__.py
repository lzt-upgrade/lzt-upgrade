from fastapi import APIRouter

from routes.endpoints import themes, logos

api_router = APIRouter()
api_router.include_router(themes.router, prefix = '/api')
api_router.include_router(logos.router, prefix = '/api')

