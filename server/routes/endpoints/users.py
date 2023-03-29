from fastapi import APIRouter, status, HTTPException
from fastapi.responses import JSONResponse

from models.user_sign import UserSign
from utils.user_signs import get_user_signs_json

router = APIRouter()

get_user_signs_responses = {
    200: {'description': 'OK', 'model': list[UserSign]},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
}

@router.get('/users/signs', response_class = JSONResponse, summary = 'Getting all users with signs', responses = get_user_signs_responses) # type: ignore
async def index():
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