from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import hashes

from utils.get_rsa_keys import get_public_key, get_private_key

rsa_padding = padding.OAEP(
    mgf=padding.MGF1(algorithm=hashes.SHA256()),
    algorithm=hashes.SHA256(),
    label=None
)

def encrypt_rsa(payload: bytes):
    """Шифрование данных с помощью RSA"""
    public_key = get_public_key()
    return public_key.encrypt( # type: ignore
        payload,
        rsa_padding
    )

def decrypt_rsa(payload: bytes):
    """Расшифрока данных с помощью RSA"""
    private_key = get_private_key()
    return private_key.decrypt( # type: ignore
        payload,
        rsa_padding
    )