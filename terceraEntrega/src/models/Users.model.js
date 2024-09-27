import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        index:true
    },
    last_name:{
        type:String,
        index:true
    },
    email:String,
    gender:String
});


export default mongoose.model('User',UserSchema);