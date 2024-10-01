import { Router } from 'express';
import Cart from "../models/carts.model.js";

const cartsRouter = Router();

cartsRouter.put('/:cid',async(req,res)=>{});

cartsRouter.put('/:cid/products/:pid',async(req,res)=>{});

cartsRouter.delete('/:cid',async(req,res)=>{});

export default cartsRouter;