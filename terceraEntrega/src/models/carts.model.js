import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products:{
        type:Number,
        index:true
    }
});


export default mongoose.model('Cart',cartSchema);