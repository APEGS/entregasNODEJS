import fs from 'fs';

const PATH = './src/files/products.json';
const NEWPATH = './src/files/newproducts.json';

export default class ProductManager{
    //--------- crea un array vacío en ruta si encuentra nada
    constructor(){
        if(!fs.existsSync(PATH)){
            this.init();
        }else {
            console.log("Product's file found");
        }
    }
    async init(){
        await fs.promises.writeFile(PATH,JSON.stringify([]));
    };

    //---------1 obtiene la lista de productos
    //---------1 obtiene la lista de productos
    async getProducts(){
        const data = await fs.promises.readFile(PATH,'utf-8');
        const products = JSON.parse(data);
        return products;
    };

    //---------2 obtiene el producto por medio de su id
    //---------2 obtiene el producto por medio de su id
    async getProductById(productId){
        const data = await fs.promises.readFile(PATH,JSON.stringify());
        const products = JSON.parse(data);
        const product = products.find(p => p.id === productId);
        return product;
    };

    //---------3 agrega nuevo producto
    //---------3 agrega nuevo producto
    async addCreatedProduct(arr){
        await fs.promises.appendFile(PATH,JSON.stringify(arr,null,'\t'));
    };

    //---------4 actualiza producto por medio de su id
    //---------4 actualiza producto por medio de su id

    // async updateProduct(){
    //     const data = await fs.promises.readFile(PATH,'utf-8');
    //     const products = JSON.parse(data);
    //     return products;
    // };

    //async deleteProduct(){};
};