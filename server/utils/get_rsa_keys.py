import os
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend

from config.load import load_private_key, load_public_key


def get_private_key():
    pem_bytes = load_private_key()
    return serialization.load_pem_private_key(
        pem_bytes, password=None, backend=default_backend()
    )

def get_public_key():
    pem_bytes = load_public_key()
    return serialization.load_pem_public_key(pem_bytes, backend=default_backend())