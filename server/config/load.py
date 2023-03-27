import os
from dotenv import load_dotenv

try:
    import tomllib
except ModuleNotFoundError:
    import tomli as tomllib

def load_cfg():
    """ Загружает конфигурационный файл """
    with open('./config/config.cfg', 'rb') as f:
        return tomllib.load(f)

def load_env():
    """Загружает .env файл"""
    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')

    if os.path.exists(dotenv_path):
        load_dotenv(dotenv_path)
        return True
    return False