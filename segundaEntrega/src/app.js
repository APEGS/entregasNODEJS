import express from 'express';
import __dirname from './utils.js'
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import socketManager from './manager/socketManager.js';

import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import viewsRouter from './routes/views.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

const httpServer =  app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

app.engine('handlebars',handlebars.engine({ extname: '.handlebars'}));
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use('/public',express.static(__dirname +'/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/products',productsRouter);
app.use('/api/carts',cartsRouter);
app.use('/',viewsRouter);
app.use('/realtimeproducts',viewsRouter);

const io = new Server(httpServer);

io.on('connection', socket=>{
    socketManager(socket);
});