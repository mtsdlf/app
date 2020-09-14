"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceSchema = void 0;
const mongoose = require("mongoose");
const auto_increment_1 = require("@typegoose/auto-increment");
exports.InvoiceSchema = new mongoose.Schema({
    _id: Number,
    paymentMethod: {
        type: String,
        enum: ['EFECTIVO', 'TARJETA', 'MERCADOPAGO'],
        default: 'EFECTIVO'
    },
    toDeliver: {
        type: String,
        enum: ['SI', 'NO'],
        default: 'NO'
    },
    order: [{
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            pname: {
                type: String,
                required: true
            },
            cost: {
                type: Number,
                required: true
            },
            qty: {
                type: Number,
                default: 1
            }
        }],
    total: Number,
    timestamp: { type: Date, default: Date.now }
});
exports.InvoiceSchema.plugin(auto_increment_1.AutoIncrementID, {});
//# sourceMappingURL=invoice.schema.js.map