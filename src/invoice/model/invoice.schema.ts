import * as mongoose from 'mongoose';
import {AutoIncrementID} from '@typegoose/auto-increment';
export const InvoiceSchema = new mongoose.Schema({
    _id: Number,
    paymentMethod: {
        type: String,
        enum : ['EFECTIVO', 'TARJETA', 'MERCADOPAGO'],
        default: 'EFECTIVO'
    },
    toDeliver: {
        type: String,
        enum : ['SI', 'NO'],
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
})
InvoiceSchema.plugin(AutoIncrementID, {});
