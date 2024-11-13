import mongoose from 'mongoose';

mongoose.pluralize(null);

const collection = 'users';

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    password: {type: String, required: true},
    cart: {type: Number},
    role: {type: String, default:`user`}
});

const model = mongoose.model(collection, userSchema);

export default model;