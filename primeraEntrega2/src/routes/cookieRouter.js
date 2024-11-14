import { Router } from "express";

const cookieRouter = Router();

cookieRouter.get('/', (req, res) => {
    const cookieContent = {Saludo: 'Hola'};
    res.cookie('cookie', JSON.stringify(cookieContent), { maxAge: 30000, signed: true });
    res.status(200).send({ error: null, data: 'Cookie generated :)' });
});

export default cookieRouter;