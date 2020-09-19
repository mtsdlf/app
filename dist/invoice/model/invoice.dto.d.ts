export declare class InvoiceDTO {
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
