import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ProductService} from '../../product/service/product.service'
import { InvoiceService } from '../service/invoice.service';
import { InvoiceDTO } from './../model/invoice.dto';


@Controller('invoice')
export class InvoiceController {
    constructor(private invoiceService: InvoiceService, private productService: ProductService) { }

    // Retrieve invoices list
    @Get('invoices')
    async getAllInvoice(@Res() res) {
        const invoices = await this.invoiceService.getAllInvoice();
        return res.status(HttpStatus.OK).json(invoices);
    }

    // Fetch a particular invoice using ID
    @Get('invoice/:invoiceID')
    async getInvoice(@Res() res, @Param('invoiceID') invoiceID) {
        const invoice = await this.invoiceService.getInvoice(invoiceID);
        if (!invoice) throw new NotFoundException(`La factura ${invoiceID} no existe`);
        return res.status(HttpStatus.OK).json(invoice);
    }

    // add a invoice
    @Post('/create')
    async addInvoice(@Res() res, @Body() invoiceDTO: InvoiceDTO) {
        for (const item in invoiceDTO.order) {
            const orderedProd = invoiceDTO.order[item];
            const inDBProd = await this.productService.getProduct(orderedProd._id);
            inDBProd.stock -= orderedProd.qty;
            this.productService.updateProduct(orderedProd._id, inDBProd)
        }
        const invoice = await this.invoiceService.addInvoice(invoiceDTO);
        return res.status(HttpStatus.OK).json({
            message: "Factura creada exitosamente",
            invoice
        })
    }

    // Update a invoice's details
    @Put('/update')
    async updateInvoice(@Res() res, @Query('invoiceID') invoiceID, @Body() invoiceDTO: InvoiceDTO) {
        const invoice = await this.invoiceService.updateInvoice(invoiceID, invoiceDTO);
        if (!invoice) throw new NotFoundException('Invoice does not exist!');
        return res.status(HttpStatus.OK).json({
            message:`Factura ${invoiceID} actualizada`,
            invoice
        });
    }

    // Delete a invoice
    @Delete('/delete')
    async deleteInvoice(@Res() res, @Query('invoiceID') invoiceID) {
        const invoice = await this.invoiceService.deleteInvoice(invoiceID);
        if (!invoice) throw new NotFoundException('Invoice does not exist');
        return res.status(HttpStatus.OK).json({
            message:  `Factura ${invoiceID} eliminada`,
            invoice
        })
    }

}
