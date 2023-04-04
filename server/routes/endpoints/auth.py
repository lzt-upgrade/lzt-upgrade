import time
import logging
from typing import Annotated
from fastapi import APIRouter, Header, Request, Response, status, HTTPException
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from slowapi import Limiter
from slowapi.util import get_remote_address
from base64 import b64decode, b64encode

from api.users import Users
from config.load import load_cfg
from models.user import User
from sql.users.controller import DbUsersController
from utils.rsa import encrypt_rsa, decrypt_rsa
from utils.cache.user_signs import get_user_signs_json
from utils.jwt import encodeJWT, decodeJWT

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)
logger = logging.getLogger(__name__)
settings = load_cfg()['app']

get_auth_code_response = {
    200: {'description': 'OK'},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
}

@router.post('/auth', response_class = JSONResponse, summary = 'Get auth token', responses = {**get_auth_code_response})
@limiter.limit("10/minute")
async def user_sign(request: Request, authorization: Annotated[str, Header()]) -> Response:
    decoded_data = b64decode(authorization.split('BASIC ')[1].encode('utf-8') + b'==').decode('utf-8')
    json_data = {}

    for i in decoded_data.split('&'):
        json_data[i.split('=')[0]] = i.split('=')[1]
    
    # json_data
    # {'accessToken': 'user_token', 'expires_in': '15552000', 'scope': 'read', 'userid': '667866'}
    
    users = await Users(json_data['accessToken']).me()
    if users and 'error' not in users:
        if int(users['user']['user_id']) != int(json_data['userid']):
            return JSONResponse(content = {'status': 'error', 'detailed': 'Users don\'t match'}, status_code = status.HTTP_400_BAD_REQUEST)

        timestamp = int(time.time())
        code = encrypt_rsa(json_data['accessToken'].encode('latin-1'))
        code_base64 = b64encode(code).decode('latin-1')
        encoded_jwt = encodeJWT({
            'userid': int(json_data['userid']),
            'scope': json_data['scope'],
            'access_token': code_base64,
            'exp': timestamp + int(json_data['expires_in']),
            'nbf': timestamp - 60,
            'iat': timestamp,
        })

        jwt_base64 = b64encode(encoded_jwt.encode('latin-1')).decode('latin-1')

        user = User(
            uid = int(json_data['userid']),
            userid = int(json_data['userid']),
            access_token = jwt_base64,
            expires_in = timestamp + int(json_data['expires_in']),
            created_at = timestamp
        )

        db_get_user = await DbUsersController().get_by_userid(int(json_data['userid']))
        if type(db_get_user) is list and len(db_get_user) > 0:
            db_status = await DbUsersController().update_user(user)
            return JSONResponse(content = {'status': 'success', 'detailed': 'Successfully logged in', 'token': jwt_base64}, status_code = status.HTTP_200_OK)

        db_status = await DbUsersController().add_user(user)
        if db_status:
            return JSONResponse(content = {'status': 'success', 'detailed': 'Successfully logged in', 'token': jwt_base64}, status_code = status.HTTP_200_OK)
        return JSONResponse(content = {'status': 'error', 'detailed': 'Failed to add user to database'}, status_code = status.HTTP_400_BAD_REQUEST)

    logger.debug(f'Failed to execute test request. Result: {users}')
    return JSONResponse(content = {'status': 'error', 'detailed': 'Failed to execute test request'}, status_code = status.HTTP_400_BAD_REQUEST)
    # print(encoded_jwt)
    # print('------[[[[[]]]]]------')
    # decoded = decodeJWT(encoded)
    # print(decoded)
    # code_decoded_base64 = b64decode(decoded['access_token'].encode('latin-1'))
    # print(code_decoded_base64)
    # code_decoded = decrypt_rsa(code_decoded_base64)
    # print(code_decoded)
