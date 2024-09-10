import { Router } from "express";
import fs from 'fs';

const viewsRouter = Router();

viewsRouter.get('/',async(req,res)=>{
    const data = await fs.promises.readFile("products.json",'utf-8');
    const products = JSON.parse(data);
    console.log(products);
    res.status(200).render("index",{products});
    // res.render('Home');
})

export default viewsRouter;