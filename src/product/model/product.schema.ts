import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    pname: String,
    cost: Number,
    stock: Number,
    code: String,
    category: {
        type: String,
        enum : ['Almacén', 'Fiambrería'],
        default: 'Almacén'
    },
    description: String,
    oldValue: Number,
    timestamp: { type: Date, default: Date.now }
})