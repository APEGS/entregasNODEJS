import { Router } from 'express';
import Cart from "../models/carts.model.js";
import Product from "../models/products.model.js";

const cartsRouter = Router();

cartsRouter.put('/:cid',async(req,res)=>{
    const { page = 1} = req.query;
    const carts = await Product.paginate({},{page});
    const result = {
        payload:carts.docs,
        nextPage:carts.nextPage,
        prevPage:carts.prevPage,
        hasNextPage:carts.hasNextPage,
        hasPrevPage:carts.hasNextPage,
        nextLink: `/api/carts/${carts.nextPage}`,
        prevLink: `/api/carts/${carts.prevLink}`
    };
    res.json(result);
});

cartsRouter.delete('/:cid',async(req,res)=>{
    const {cid} = req.params;
    const parsedId = parseInt(cid);
    const findCart = await Cart.find(parsedId).explain('executionstats');
    if(findCart === -1){
        return res.status(400).send({status:"error",error:"Cart doesn't exist"})
    }
    Cart.splice(findCart,1);
    console.log("you've elimitated your cart");
    res.sendStatus(204);
});

cartsRouter.delete('/cid/products/:pid',async(req,res)=>{
    const {cid, pid} = req.params;
    const parsedId = parseInt(cid);
    const parsedProduct = parseInt(pid);
    const findCart = await Cart.find(parsedId).explain('executionstats');
    const findProduct = await Cart.find(parsedProduct);
    if(findCart === -1){
        return res.status(400).send({status:"error",error:"Cart doesn't exist"})
    }
    Cart.splice(findProduct,1);
    console.log("you've elimitated one product");
    res.sendStatus(204);
});

export default cartsRouter;