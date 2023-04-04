import jwt
from utils.get_rsa_keys import get_private_key, get_public_key

def encodeJWT(payload):
    private_key = get_private_key()
    return jwt.encode(payload, private_key, algorithm='RS256') # type: ignore

def decodeJWT(jwt_to_decode):
    public_key = get_public_key()
    return jwt.decode(jwt_to_decode, public_key, algorithms=['RS256']) # type: ignore