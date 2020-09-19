"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    pname: String,
    stock: Number,
    cost: Number,
    price: Number,
    code: String,
    category: {
        type: String,
        enum: ['Almacén', 'Fiambrería'],
        default: 'Almacén'
    },
    description: String,
    oldValue: Number,
    timestamp: { type: Date, default: Date.now }
});
//# sourceMappingURL=product.schema.js.map