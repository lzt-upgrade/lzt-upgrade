from fastapi import APIRouter, status, HTTPException 
from fastapi.responses import JSONResponse

from models.logo import Logo
from utils.logos import get_logos_json, get_logo_by_json

router = APIRouter()

get_logos_responses = {
    200: {'description': 'OK', 'model': list[Logo]},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
}

get_logo_responses = {
    200: {'description': 'OK', 'model': Logo},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
    422: {'description': 'Unprocessable Entity'},
}

@router.get('/logos', response_class = JSONResponse, summary = 'Get logos', responses = get_logos_responses)
async def index(target: int = None):
    """
        Get availabled logos from json file (auto-generated from database)
        
        Returns (if status code 200):
        - uid: Unqiue ID of the logo
        - name: Name of the logo
        - preview: Link to the preview image
        - target: Logo target
        - css: CSS code for the logo
        - author: Author of the logo
        - author_userid: Author's user ID
        - active: Is the logo active
        - created_at: Date of creation
    """
    response = await get_logos_json(target)
    if response and len(response) > 0:
        return JSONResponse(content = response, status_code = status.HTTP_200_OK)
    raise HTTPException(status_code = status.HTTP_204_NO_CONTENT)

@router.get('/logo', response_class = JSONResponse, summary = 'Get logo by uid', responses = get_logo_responses)
async def index(uid: int = None):
    """
        Get logo by uid from json file (auto-generated from database)
        
        Returns (if status code 200):
        - uid: Unqiue ID of the logo
        - name: Name of the logo
        - preview: Link to the preview image
        - target: Logo target
        - css: CSS code for the logo
        - author: Author of the logo
        - author_userid: Author's user ID
        - active: Is the logo active
        - created_at: Date of creation
    """
    response = await get_logo_by_json(uid)
    if response and len(response) > 0:
        return JSONResponse(content = response, status_code = status.HTTP_200_OK)
    raise HTTPException(status_code = status.HTTP_204_NO_CONTENT)