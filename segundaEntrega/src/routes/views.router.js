import { Router } from "express";
import fs from 'fs';

const viewsRouter = Router();
const PATH = './src/files/products.json';

viewsRouter.get('/products',async(req,res)=>{
    const data = await fs.promises.readFile(PATH,'utf-8');
    const products = JSON.parse(data);
    console.log(products);
    res.status(200).render("home",{products});
});

viewsRouter.get('/realtimeproducts',async(req,res)=>{
    const data = await fs.promises.readFile(PATH,'utf-8');
    const products = JSON.parse(data);
    console.log(products);
    res.status(200).render("realtimeproducts",{products});
});

export default viewsRouter;