import express from 'express';
import {__dirname} from './utils.js'
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

const httpServer =  app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

app.engine('handlebars',handlebars.engine({ extname: '.hbs'}));
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use('/api/products',productsRouter);
app.use('/api/carts',cartsRouter);

const io = new Server(httpServer);

io.on('connection', socket=>{});