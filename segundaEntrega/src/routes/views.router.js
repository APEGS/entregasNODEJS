import { Router } from "express";
import fs from 'fs';

const viewsRouter = Router();

viewsRouter.get('/products',async(req,res)=>{
    const data = await fs.promises.readFile("products.json",'utf-8');
    const products = JSON.parse(data);
    console.log(products);
    res.status(200).render("index",{products});
});

viewsRouter.get('/',async(req,res)=>{
    const data = await fs.promises.readFile("products.json",'utf-8');
    const products = JSON.parse(data);
    console.log(products);
    res.status(200).render("index",{products});
});

export default viewsRouter;