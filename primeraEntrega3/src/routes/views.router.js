import { Router } from 'express';
import { auth } from './userRouter.js';

const viewsRouter = Router();

viewsRouter.get('/register', (req, res) => {
    const data = {};
    res.status(200).render('register', data);
});

viewsRouter.get('/login', (req, res) => {
    const data = {version: 'v3'};
    res.status(200).render('login', data);
});

viewsRouter.get('/profile', auth, (req, res) => {
    const data = req.session.passport.user;
    res.status(200).render('profile', data);
});

export default viewsRouter;