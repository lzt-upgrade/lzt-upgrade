from fastapi import APIRouter, status, HTTPException
from fastapi.responses import JSONResponse

from models.theme import Theme
from utils.themes import get_themes_json

router = APIRouter()

get_themes_responses = {
    200: {'description': 'OK', 'model': list[Theme]},
    204: {'description': 'No content'},
    404: {'description': 'Not Found'},
}

@router.get('/themes', tags = ['Themes'], response_class = JSONResponse, summary = 'Get themes', responses = get_themes_responses)
async def index():
    """
        Get availabled themes from json file (auto-generated from database)
        
        Returns (if status code 200):
        - uid: Unqiue ID of the theme
        - name: Name of the theme
        - file: Name of the theme file
        - author: Author of the theme
        - author_userid: Author's user ID
        - accent_color: Accent color of the theme
        - text_color: Text color of the theme
        - active: Is the theme active
        - created_at: Date of creation
    """
    response = await get_themes_json()
    if response and len(response) > 0:
        status_code = status.HTTP_200_OK
    else:
        raise HTTPException(status_code = status.HTTP_204_NO_CONTENT)
    return JSONResponse(content = response, status_code = status_code)