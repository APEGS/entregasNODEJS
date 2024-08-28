import fs from 'fs';

const PATHC = './src/files/carts.json';
const PATH = './src/files/products.json';

export default class CartManager {
    //--------- crea un array vacío en ruta si encuentra nada
    constructor(){
        if(!fs.existsSync(PATHC)){
            this.init();
        }else {
            console.log("Product's file found");
        }
    }
    async init(){
        await fs.promises.writeFile(PATHC,JSON.stringify([]));
    };

    //---------1 agrega un nuevo cart o carrito
    //---------1 agrega un nuevo cart o carrito
    async createCart(arr){
        await fs.promises.appendFile(PATHC,JSON.stringify(arr,null,'\t'));
    };

    //---------2 cita la lista de productos por medio del id de cada cart
    //---------2 cita la lista de productos por medio del id de cada cart
    // async getCartsById(cartId){
    //     const data = await fs.promises.readFile(PATHC,JSON.stringify());
    //     const carts = JSON.parse(data);
    //     const cart = carts.find(c => c.id === cartId);
    //     console.log(cart);
    //     return cart;
    // };

    // async getcartProducts(cartId){
    //     const data = await fs.promises.readFile(PATHC,JSON.stringify());
    //     // const dat = await fs.promises.readFile(PATH,JSON.stringify());
    //     const carts = JSON.parse(data);
    //     // const prods = JSON.parse(dat);
    //     //const cart = carts.find(c => c.id === cartId);
    //     if(cartId){
    //         const productsArr = carts.find(c => c.cartProducts);
    //         for (let i = 0; i <= productsArr.length; i++){
    //             if(productsArr.includes(products)){
    //                 console.log('esta funcionando');
    //                 return products;
    //             }
    //         }
    //         console.log('cagaste');
    //         console.log(productsArr);
    //         //const productsSaved = productsArr.
    //         return productsArr;
    //     }
    //     // const savedProducts = {...productsArr};
    //     // const product = prods.find(p => p.id == savedProducts);
    // };

    // async getProductById(productId){
    //     const data = await fs.promises.readFile(PATH,JSON.stringify());
    //     const products = JSON.parse(data);
    //     const product = products.find(p => p.id === productId);
    //     return product;
    // };

    //---------3 agrega un nuevo producto al cart o carrito
    //---------3 agrega un nuevo producto al cart o carrito
    async findCart(cartId){
        const data = await fs.promises.readFile(PATHC,'utf-8');
        const carts = JSON.parse(data);
        const cart = carts.find(c => c.id === cartId);
        return cart;
    };

    async findArr(arr){
        arr = PATHC;
        return arr;
    };

    async addProduct(product){
        //cartId.includes(products)
        await fs.promises.appendFile(PATHC,JSON.stringify(product));
    }
};