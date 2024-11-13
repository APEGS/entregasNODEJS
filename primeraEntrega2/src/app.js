import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
//import cookieParser from 'cookie-parser';
//import session from 'express-session';

import config from './config.js';
import userRouter from './routes/userRouter.js';
import cookieRouter from './routes/cookieRouter.js';

const app = express();

app.listen(config.PORT, async()=>{
    await mongoose.connect(config.MONGODB_URI);
    console.log(`Listening on ${PORT}`);
});

app.engine('handlebars',handlebars.engine());
app.set('views', `${config.__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(cookieParser(config.SECRET));
//app.use(session({ secret: config.SECRET, resave: true, saveUninitialized: true }));
app.use('/api/sessions',userRouter);
app.use('/api/cookies',cookieRouter);