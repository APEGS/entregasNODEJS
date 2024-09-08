import express from 'express';
import handlebars from 'express-handlebars';

import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use('/api/products',productsRouter);
app.use('/api/carts',cartsRouter);