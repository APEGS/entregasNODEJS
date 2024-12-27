import mongoose from 'mongoose';

mongoose.pluralize(null);

const collection = 'tickets';

const ticketSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    code: {type: String, required: true, unique: true},
    purchase_datetime: {type: Date},
    amount: {type: Number, required: true, },
    purchaser: {type: String, required: true},
});

const model = mongoose.model(collection, ticketSchema);

export default model;