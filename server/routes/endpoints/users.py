import time
from typing import Annotated
from fastapi import APIRouter, Header, Request, Response, status, HTTPException
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from slowapi import Limiter
from slowapi.util import get_remote_address

from config.load import load_cfg
from models.user_sign import UserSign, UserSignRequest
from utils.cache.user_signs import get_user_signs_json

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)
settings = load_cfg()['app']

get_user_signs_responses = {
    200: {'description': 'OK', 'model': list[UserSign]},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
}

post_user_sign_response = {
    200: {'description': 'OK'},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
}

@router.get('/users/signs', response_class = JSONResponse, summary = 'Getting all users with signs', responses = {**get_user_signs_responses})
async def index() -> Response:
    """
        Getting all users with signs
        
        Returns (if status code 200):
        - uid (int): ID пользовательского значка
        - userid (int): ID пользователя
        - signid (int): ID значка
        - created_at (int): Время создания
    """
    response = await get_user_signs_json()
    if response and len(response) > 0:
        return JSONResponse(content = response, status_code = status.HTTP_200_OK)
    raise HTTPException(status_code = status.HTTP_204_NO_CONTENT)

@router.post('/user/{userid}/sign', response_class = JSONResponse, summary = 'Add user to user signs database', responses = {**post_user_sign_response})
@limiter.limit("5/minute")
async def user_sign(request: Request, userid: int, user_sign: UserSignRequest, signature: Annotated[str, Header()]) -> Response:
    """
        Add user to user signs database
        
        Returns (if status code 200):
        - uid (int): ID пользовательского значка
        - userid (int): ID пользователя
        - signid (int): ID значка
        - created_at (int): Время создания
    """
    # userid
    # timestamp
    # data = sign(user_sign)
    # sign(userid, timestamp, data)
    print(signature)
    user_sign_json = jsonable_encoder(user_sign)
    if user_sign_json['signid'] not in settings['signs_for_all'] and userid not in settings['developers']:
        return JSONResponse(content = {'error': 'unauthorized'}, status_code = status.HTTP_401_UNAUTHORIZED)
    if user_sign_json['created_at'] + 60 < int(time.time()):
        return JSONResponse(content = {'error': 'unauthorized'}, status_code = status.HTTP_401_UNAUTHORIZED)
    # if signature != sign(userid, timestamp, data):
    return JSONResponse(content = user_sign_json, status_code = status.HTTP_200_OK)
