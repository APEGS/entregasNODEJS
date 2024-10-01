import { Router } from 'express';
import CartManager from '../manager/CartManager.js';

const cartsRouter = Router();
const cartManager = new CartManager();

const carts = [];

//---------1 agrega un nuevo cart o carrito
//---------1 agrega un nuevo cart o carrito
cartsRouter.post('/',async(req,res)=>{
    const {products} = req.body;
    if(!products){
        return res.status(400).send('cannot create, cart is empty');
    };
    const cart = {
        products:[]
    }
    if(carts.length===0){
        cart.id = 1;
    } else {
        cart.id = carts[carts.length-1].id + 1;
    };
    carts.push(cart);
    const product = await cartManager.createCart(cart);
    res.sendStatus(201);
    console.log(product);
});

//---------2 obtiene la lista de productos por medio del id de cada cart
//---------2 obtiene la lista de productos por medio del id de cada cart
cartsRouter.get('/:cid',async(req,res)=>{
    try {
        const {cid} = req.params;
        const {pid} = req.params;
        const parsedId = parseInt(cid);
        const parsedProduct = parseInt(pid);
        const cart = await cartManager.getCartsById(parsedId);
        if(!cart){
            return res.send('cart not found');
        } else{
            console.log('hola');
            const productContainer = await cartManager.getcartProducts(cart);
            console.log('y aquí?');
            const products = await cartManager.getProductById(productContainer);
            console.log('ni llega');
            return products;
        }
        res.send({cart});
    } catch (error) {
        console.log('error');
        res.send('error: cannot find cart');
    }
});

//---------3 agrega un producto al carrito seleccionado
//---------3 agrega un producto al carrito seleccionado
cartsRouter.post('/:cid/product/:pid',async(req,res)=>{
    const {cid,pid} = req.params;
    const {quantity} = req.body;
    const parsedId = parseInt(cid);
    const parsedProduct = parseInt(pid);
    const cart = await cartManager.findCart(parsedId);
    console.log(parsedProduct);
    console.log('cart found ' + JSON.stringify(cart));
    if(!cart){
        console.log("maybe the cart only exist in your dreams, but can we be sure that what we are living isn't the real dream, or nightmare? In case you have no one to keep you going, in case there is no sun to light a day in a endless night. Someone can really be anyone, your mother, your father, a stranger on the other side trying to decode with you. A stranger you want to deperately call friend, juts for the sake of the illusion of thinking you have something in common and it is enough to not being left alone");
        return res.send('cart not found');
    }else{
        await cartManager.findArr(carts);
        // if(carts.includes(parsedId)){
            const newProduct = {
                products: [...parsedProduct]
            };
            carts[productIndex] = {...newProducts[productIndex],title,description,price,category};
            cart.push(newProduct);
            const addProduct = await cartManager.addProduct(cart);
            console.log(addProduct);
            res.send({cart});
        //};
    };
});

export default cartsRouter;