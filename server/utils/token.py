import os
import time
from hashlib import sha256


async def generate_token(privillege: str, timestamp: int):
    token_pre = f'{privillege}{os.environ.get("SECRET_KEY")}{timestamp}'
    token = sha256(token_pre.encode('utf-8')).hexdigest()
    return token

async def validate_token(token: str, privillege: str, timestamp: int):
    if int(time.time()) > timestamp + 12:
        return False
    token_generated = await generate_token(privillege, timestamp)
    if token == token_generated:
        return True
    return False