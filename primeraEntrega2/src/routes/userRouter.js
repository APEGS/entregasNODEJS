import { Router } from "express";
import userManager from "../manager/users.manager.js";

const userRouter = Router();
const manager = new userManager();

const auth = (req, res, next) => {
    if (req.session?.userData && req.session?.userData.admin) {
        next();
    } else {
        res.status(401).send({ error: 'No autorizado', data: [] });
    }
};

userRouter.get('/', async (req, res) => {
    try {
        const data = await user.model.find().lean();
        res.status(200).send({ error: null, data: data });
    } catch (err) {
        res.status(500).send({ error: 'Error interno de ejecución del servidor', data: [] });
    }
});

userRouter.get('/', (req, res) => {
    req.session.counter ? req.session.counter++: req.session.counter = 1;
    res.status(200).send({ error: null, data: { visits: req.session.counter } });
});

userRouter.get('/current', (req,res)=>{});

export default userRouter;