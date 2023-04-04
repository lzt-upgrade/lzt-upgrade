import { encode, decode } from 'js-base64';

function base64Encode(str) {
    return encode(str, true);
}

function base64Decode(str) {
    return decode(str);
}

export { base64Decode, base64Encode };