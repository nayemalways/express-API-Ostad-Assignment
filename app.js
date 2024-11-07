import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import fileUplad from "express-fileupload";
import router from './routes/api.js';
import rateLimit from "express-rate-limit";
import {
    PORT,
    WEB_CACHE,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME,
    URL_ENCODED,
    MAX_JSON_SIZE,
    MONGODB_CONNECTION
} from './app/config/config.js';




// CREATE APPLICATION OBJECT
const app = express();


// APPLICATION GLOBAL MIDDLEWARE
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
app.use(fileUplad());
app.use(express.urlencoded({extends: URL_ENCODED}));
// JSON
app.use(express.json({limit: MAX_JSON_SIZE}));

// RATE LIMIT
const limitter = rateLimit({windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBER});
app.use(limitter);

// WEB CACHE
app.set('etag', WEB_CACHE);

// MONGODB CONNECTION
/* 
    Will be conntected later
*/


// API ROUTING
app.use('/api/v1', router);


// *** LISTEN APPLICATION ***
app.listen(PORT, () => {
    console.log(`Application is running on ${PORT}`);
})