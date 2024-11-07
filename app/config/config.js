import path from 'path';

// MONGODB CONNECTION 
export const MONGODB_CONNECTION = "";

// JWT AUTHENTICATION
export const JWT_SECRET_CODE = "";
export const JWT_EXPIRATION_TIME = 60 * 60 * 24 * 30; // 30 DAYS

// EMAIL 
export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USERNAME = "";
export const EMAIL_PASSWORD = "";

// URL ENCODE
export const URL_ENCODED = true;

// REQUEST RATE LIMIT
export const REQUEST_LIMIT_TIME = 60 * 15 * 1000; // 15 MIN
export const REQUEST_LIMIT_NUMBER = 3000;

// WEB CACHE 
export const WEB_CACHE = false;

// JSON MAXIMUM SIZE
export const MAX_JSON_SIZE = '50mb';

// PORT 
export const PORT = 3030;

export function UPLOAD_FILE(filename){
    return path.resolve(process.cwd(), 'storage', filename);
}
