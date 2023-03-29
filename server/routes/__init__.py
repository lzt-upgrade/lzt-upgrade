from fastapi import APIRouter

from routes.endpoints import themes, logos, users

api_router = APIRouter(prefix='/api')
api_router.include_router(themes.router, tags = ['Themes'])
api_router.include_router(logos.router, tags = ['Logos'])
api_router.include_router(users.router, tags = ['Users'])

