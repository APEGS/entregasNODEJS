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
// cartsRouter.get('/:cid',async(req,res)=>{
//     try {
//         const {cid} = req.params;
//         const parsedId = parseInt(cid);
//         const cart = await cartManager.getCartsById(parsedId);
//         if(!cart){
//             return res.send('cart not found');
//         } else{
//             console.log('hola');
//             const productContainer = await cartManager.getcartProducts(cart);
//             console.log('y aquí?');
//             const products = await cartManager.getProductById(productContainer);
//             console.log('ni llega');
//             return products;   
//         }
//         res.send({cart});
//     } catch (error) {
//         console.log('error');
//         res.send('error: cannot find cart');
//     }
// });

//---------3 agrega un producto al carrito seleccionado
//---------3 agrega un producto al carrito seleccionado
// cartsRouter.post('/:cid/product/:pid',async(req,res)=>{
//     const {cid} = req.params;
//     const parsedId = parseInt(cid);
//     const cart = await cartManager.getCartsById(parsedId);
//     if(!cart){
//         return res.send('cart not found');
//     }else{
//         const addProduct = await cartManager.addProduct(parsedId);
//         addProduct.push(dato);
//    }
// });

export default cartsRouter;