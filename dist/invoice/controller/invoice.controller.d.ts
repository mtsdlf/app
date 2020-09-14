import { ProductService } from '../../product/service/product.service';
import { InvoiceService } from '../service/invoice.service';
import { InvoiceDTO } from './../model/invoice.dto';
export declare class InvoiceController {
    private invoiceService;
    private productService;
    constructor(invoiceService: InvoiceService, productService: ProductService);
    getAllInvoice(res: any): Promise<any>;
    getInvoice(res: any, invoiceID: any): Promise<any>;
    addInvoice(res: any, invoiceDTO: InvoiceDTO): Promise<any>;
    updateInvoice(res: any, invoiceID: any, invoiceDTO: InvoiceDTO): Promise<any>;
    deleteInvoice(res: any, invoiceID: any): Promise<any>;
}
