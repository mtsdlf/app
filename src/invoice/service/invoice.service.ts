import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from '../interfaces/invoice.interface';
import { InvoiceDTO } from '../model/invoice.dto'

@Injectable()
export class InvoiceService {
    constructor(@InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>) { }

    // fetch all invoices
    async getAllInvoice(): Promise<Invoice[]> {
        const invoices = await this.invoiceModel.find()
        .populate('order')
        .exec();
        return invoices;
    }

    // Get a single invoice
    async getInvoice(invoiceID): Promise<Invoice> {
        const invoice = await this.invoiceModel.findById(invoiceID).populate('order').exec();
        return invoice;
    }

    // post a single invoice
    async addInvoice(InvoiceDTO: Invoice): Promise<Invoice> {
        const newInvoice = await this.invoiceModel(InvoiceDTO);
        return newInvoice.save();
    }

    // Edit invoice details
    async updateInvoice(invoiceID, InvoiceDTO: InvoiceDTO): Promise<Invoice> {
        const updatedInvoice = await this.invoiceModel
            .findByIdAndUpdate(invoiceID, InvoiceDTO, { new: true });
        return updatedInvoice;
    }

    // Delete a invoice
    async deleteInvoice(invoiceID): Promise<any> {
        const deletedInvoice = await this.invoiceModel.findByIdAndRemove(invoiceID);
        return deletedInvoice;
    }

}
