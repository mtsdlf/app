import { Document } from 'mongoose';
export interface Product extends Document {
    readonly pname: string;
    stock: number;
    readonly cost: number;
    readonly price: number;
    readonly code: string;
    readonly category: string;
    readonly description: string;
    readonly oldValue: number;
    readonly timestamp: Date;
}
