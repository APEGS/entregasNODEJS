import { Router } from 'express';
import Product from "../models/products.model.js"
import { uploader } from "./src/multer.js"

const productsRouter = Router();

router.get('/',async (req,res)=>{
    const { page = 1, limit = 10} = req.query;
    const products = await Product.paginate({},{page,limit});
    const result = {
        payload:products.docs,
        nextPage:products.nextPage,
        prevPage:products.prevPage,
        hasNextPage:products.hasNextPage,
        hasPrevPage:products.hasNextPage,
        nextLink: `/api/products/${products.nextPage}`,
        prevLink: `/api/products/${products.prevLink}`
    };
    res.json(result);
});

router.post('/',uploader.single('file'),async (req,res)=>{
    try {
        if (!req.file) {
            return res.status(400).json({ status: "error", error: "No se pudo guardar la imagen" })
        }
    
        const body = req.body
        body.img = req.file.originalname
        await Product.create(body);
        res.json({message:'Product created'})
    } catch (error) {
        res.json(error);
    }
});

router.delete('/:id',async (req,res) => {
    try {
        const {id} = req.params;
        await Product.deleteOne({_id:id})
        res.status(200).json({message:'product deleted'});
    } catch (error) {
        res.json(error);
    }
});

export default productsRouter;