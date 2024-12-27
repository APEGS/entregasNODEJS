import * as url from 'url';

const config = {
    PORT: process.env.PORT || 8080,
    __dirname: url.fileURLToPath(new URL('.', import.meta.url)),
    MONGODB_URI: 'mongodb://127.0.0.1:27017/tienda',
    APP_NAME: 'TiendaHW',
    SECRET: 'secret',
    GITHUB_CLIENT_ID: 'Iv23ct4R16EOMtfVid5H',
    GITHUB_CLIENT_SECRET: 'e815027b5f6c1c2272011341170bbdd34ff4ce92',
    GITHUB_CALLBACK_URL: 'http://localhost:8080/api/sessions/gc'
};

export default config;