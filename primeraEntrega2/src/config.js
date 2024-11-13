import * as url from 'url';

const configurations = {
    PORT: process.env.PORT || 8080,
    __dirname: url.fileURLToPath(new URL('.', import.meta.url)),
    MONGODB_URI: 'mongodb://127.0.0.1:27017/tienda'
};

export default configurations;