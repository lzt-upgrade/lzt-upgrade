import os
import toml
from dotenv import load_dotenv

def load_cfg():
    """Загружает конфиг файл"""
    cfg = toml.load('./config/config.cfg')
    return cfg

def load_env():
    """Загружает .env файл"""
    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')

    if os.path.exists(dotenv_path):
        load_dotenv(dotenv_path)
        return True
    return False