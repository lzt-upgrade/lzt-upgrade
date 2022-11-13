import os
import sys
import logging

from config.load import load_env, load_cfg


load_env()
env_port = os.environ.get('PORT')
PORT = int(env_port) if env_port else 5000
logs = load_cfg()['LOGGING']

bind = f'0.0.0.0:{PORT}'
use_reloader = True
loglevel = logging.getLevelName(logs['level'])