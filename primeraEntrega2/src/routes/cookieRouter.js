import { Router } from "express";

const cookieRouter = Router();

cookieRouter.get('/set', (req, res) => {
    const cookieContent = {para: 'puto el que lo lea'};
    // Indico al navegador que cree una cookie
    res.cookie('cookie', JSON.stringify(cookieContent), { maxAge: 30000, signed: true });
    res.status(200).send({ error: null, data: 'Cookie generated :)' });
});

export default cookieRouter;