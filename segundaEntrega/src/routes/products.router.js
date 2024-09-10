import { Router } from 'express';

import ProductManager from '../manager/ProductManager.js';

const productsRouter = Router();
const productManager = new ProductManager();


const newProducts = [];

//---------1 obtiene la lista de productos
//---------1 obtiene la lista de productos
productsRouter.get('/',async (req,res)=>{
    try {
        const products = await productManager.getProducts();
        res.send({products,newProducts});
    } catch (error) {
        console.log('error');
        res.send('error: not finding products');
    }
});

//---------2 obtiene el producto por medio de su id
//---------2 obtiene el producto por medio de su id
productsRouter.get('/:pid',async(req,res)=>{
    try {
        const {pid} = req.params;
        const parsedId = parseInt(pid);
        const product = await productManager.getProductById(parsedId);
        if(!product){
            return res.send('product not found');
        }
        res.send({product});
    } catch (error) {
        console.log('error');
        res.send('error: cannot find product');
    }
});

//---------3 agrega nuevo producto
//---------3 agrega nuevo producto
productsRouter.post('/',async(req,res)=>{
    const {title,description,code,price,stock,category}= req.body
    if(!title || !description || !code || !price || !stock || !category){
        return res.status(400).send('product information is incomplete');
    };
    const newProduct = {
        title,
        description,
        code,
        price,
        estado: true,
        stock,
        category
    };
    if(newProducts.length===0){
        newProduct.id = 1
    }else{
        newProduct.id = newProducts[newProduct.length-1].id + 1;
    };
    newProducts.push(newProduct);
    const product = await productManager.addCreatedProduct(newProducts);
    res.sendStatus(201);
    console.log(product);
});

//---------4 actualiza producto por medio de su id
//---------4 actualiza producto por medio de su id
productsRouter.patch('/:pid',async(req,res)=>{
    const {pid} = req.params;
    const parsedId = parseInt(pid);
    const body = req.body;
    const findProduct = await productManager.findProduct(parsedId);
    if(findProduct === -1){
        console.log('no');
        return res.status(400).send({status:"error",error:"Product doesn't exist"})
    };
    newProducts[findProduct] = {...newProducts[findProduct],...body};
    const saveChange = await productManager.updateProduct(findProduct);
    console.log(saveChange);
    res.send({status:"success",message:"Product updated"});
});

//---------5 elimina un producto por medio de su id
//---------5 elimina un producto por medio de su id
productsRouter.delete('/:pid',async(req,res)=>{
    const {pid} = req.params;
    const parsedId = parseInt(pid);
    const findProduct = await productManager.findProduct(parsedId);
    if(findProduct === -1){
        return res.status(400).send({status:"error",error:"User doesn't exist"})
    }
    await productManager.findArr(newProducts);
    newProducts.splice(findProduct,1);
    console.log('has eliminado un producto');
    res.sendStatus(204);
});

export default productsRouter;