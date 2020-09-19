import { Document } from 'mongoose';
export interface Invoice extends Document {
    readonly paymentMethod: string;
    readonly toDeliver: string;
    readonly order: {
        _id: string;
        pname: string;
        price: number;
        qty: number;
    };
    readonly total: number;
    readonly timestamp: Date;
}
