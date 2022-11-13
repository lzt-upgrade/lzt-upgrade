from datetime import datetime
import logging
import os
import sys
import rich

from rich.logging import RichHandler
from rich.theme import Theme
from rich.style import Style

from config.load import load_cfg


settings = load_cfg()['LOGGING']

def check_log_exists(part):
    for file in [f'./logs/server{part}.log', f'./logs/worker{part}.log']: # For future use
        if os.path.isfile(file):
            return True

def init_logging():
    root_logger = logging.getLogger()
    server_log = logging.getLogger('server')
    worker_log = logging.getLogger('worker')
    logs = [server_log, worker_log] # For future use
    if settings['level'] in [10, 20, 30, 40, 50]:
        for log in logs:
            log.setLevel(settings['level'])

    file_formatter = logging.Formatter(
            '[{asctime}] [{levelname}] {module}-{name}: {message}', datefmt = '%Y-%m-%d %H:%M:%S', style = '{'
    )

    if settings['rich']:
        rich_console = rich.get_console()
        rich.reconfigure(tab_size = 4)
        # Theme from https://github.com/Cog-Creators/Red-DiscordBot/blob/V3/develop/redbot/logging.py
        rich_console.push_theme(Theme(
            {
                    'log.time': Style(dim = True),
                    'logging.level.warning': Style(color = 'yellow'),
                    'logging.level.critical': Style(color = 'white', bgcolor = 'red'),
                    'logging.level.error': Style(color = 'red'),
                    'logging.level.verbose': Style(color = 'magenta', italic = True, dim = True),
                    'logging.level.trace': Style(color = 'white', italic = True, dim = True),
                    'repr.number': Style(color = 'cyan'),
                    'repr.url': Style(underline = True, italic = True, bold = False, color = 'cyan'),
            }
        ))
        rich_console.file = sys.stdout
        rich_formatter = logging.Formatter('{message}', datefmt = '[%X]', style = '{')
        stdout_handler = RichHandler(
            rich_tracebacks = True
        )
        stdout_handler.setFormatter(rich_formatter)
    else:
        stdout_handler = logging.StreamHandler(sys.stdout)
        stdout_handler.setFormatter(file_formatter)
    root_logger.addHandler(stdout_handler)
    logging.captureWarnings(True)

    if settings['save']:
        if not os.path.isdir('./logs'):
            try:
                os.mkdir('./logs')
                root_logger.info('Creating log directory')
            except OSError:
                root_logger.exception('Failed to create log directory')
        part = f'_{datetime.now().strftime("%Y%m%d")}'
        if check_log_exists(part) is True:
            file_mode = 'a'
        else:
            file_mode = 'w'
        
        for log in logs:
            handler = logging.FileHandler(filename = f'./logs/{log.name}{part}.log', encoding = 'utf-8', mode = file_mode)
            handler.setFormatter(file_formatter)
            log.addHandler(handler)
