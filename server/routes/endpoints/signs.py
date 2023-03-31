from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse

from models.sign import Sign
from utils.cache.signs import get_signs_json

router = APIRouter()

get_signs_responses = {
    200: {'description': 'OK', 'model': list[Sign]},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
}

@router.get('/signs', response_class = JSONResponse, summary = 'Getting availabled signs', responses = {**get_signs_responses}) # type: ignore
async def index() -> Response:
    """
        Getting all availablerd signs
        
        Returns (if status code 200):
        - uid (int): ID пользовательского значка
        - system_name (str): Отображаемое имя (в API)
        - name (str): Отображаемое имя (в интерфейсе)
        - image_link (str): Ссылка на изображение значка
    """
    response = await get_signs_json()
    if response and len(response) > 0:
        return JSONResponse(content = response, status_code = status.HTTP_200_OK)
    raise HTTPException(status_code = status.HTTP_204_NO_CONTENT)