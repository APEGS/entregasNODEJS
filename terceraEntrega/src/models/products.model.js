import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    description:String,
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }
});

ProductSchema.plugin(mongoosePaginate);
export default mongoose.model('Product',ProductSchema);