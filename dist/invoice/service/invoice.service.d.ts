import { Model } from 'mongoose';
import { Invoice } from '../interfaces/invoice.interface';
import { InvoiceDTO } from '../model/invoice.dto';
export declare class InvoiceService {
    private readonly invoiceModel;
    constructor(invoiceModel: Model<Invoice>);
    getAllInvoice(): Promise<Invoice[]>;
    getInvoice(invoiceID: any): Promise<Invoice>;
    addInvoice(InvoiceDTO: Invoice): Promise<Invoice>;
    updateInvoice(invoiceID: any, InvoiceDTO: InvoiceDTO): Promise<Invoice>;
    deleteInvoice(invoiceID: any): Promise<any>;
}
