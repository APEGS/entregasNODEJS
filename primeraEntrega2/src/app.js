import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import FileStore from 'session-file-store';
import passport from 'passport';

import config from './config.js';
import userRouter from './routes/userRouter.js';

const app = express();
const fileStorage = FileStore(session);

app.listen(config.PORT, async()=>{
    await mongoose.connect(config.MONGODB_URI);
    console.log(`Listening on ${PORT}`);
});

app.engine('handlebars',handlebars.engine());
app.set('views', `${config.__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(config.SECRET));
app.use(session({secret: config.SECRET, resave: true, saveUninitialized: true, store:new fileStorage()}));
app.use('/api/sessions',userRouter);
app.use('/views', views.router);
app.use('/static', express.static(`${config.DIRNAME}/public`));