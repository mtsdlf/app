export class InvoiceDTO {
    readonly paymentMethod: string;
    readonly toDeliver: string; 
    readonly order: {
        _id: string,
        pname: string,
        cost: number,
        qty: number
    }
    readonly total: number;
    readonly timestamp: Date;
}
