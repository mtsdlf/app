"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../../product/service/product.service");
const invoice_service_1 = require("../service/invoice.service");
const invoice_dto_1 = require("./../model/invoice.dto");
let InvoiceController = class InvoiceController {
    constructor(invoiceService, productService) {
        this.invoiceService = invoiceService;
        this.productService = productService;
    }
    async getAllInvoice(res) {
        const invoices = await this.invoiceService.getAllInvoice();
        return res.status(common_1.HttpStatus.OK).json(invoices);
    }
    async getInvoice(res, invoiceID) {
        const invoice = await this.invoiceService.getInvoice(invoiceID);
        if (!invoice)
            throw new common_1.NotFoundException(`La factura ${invoiceID} no existe`);
        return res.status(common_1.HttpStatus.OK).json(invoice);
    }
    async addInvoice(res, invoiceDTO) {
        for (const item in invoiceDTO.order) {
            const orderedProd = invoiceDTO.order[item];
            const inDBProd = await this.productService.getProduct(orderedProd._id);
            inDBProd.stock -= orderedProd.qty;
            this.productService.updateProduct(orderedProd._id, inDBProd);
        }
        const invoice = await this.invoiceService.addInvoice(invoiceDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Factura creada exitosamente",
            invoice
        });
    }
    async updateInvoice(res, invoiceID, invoiceDTO) {
        const invoice = await this.invoiceService.updateInvoice(invoiceID, invoiceDTO);
        if (!invoice)
            throw new common_1.NotFoundException('Invoice does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: `Factura ${invoiceID} actualizada`,
            invoice
        });
    }
    async deleteInvoice(res, invoiceID) {
        const invoice = await this.invoiceService.deleteInvoice(invoiceID);
        if (!invoice)
            throw new common_1.NotFoundException('Invoice does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            message: `Factura ${invoiceID} eliminada`,
            invoice
        });
    }
};
__decorate([
    common_1.Get('invoices'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "getAllInvoice", null);
__decorate([
    common_1.Get('invoice/:invoiceID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('invoiceID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "getInvoice", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, invoice_dto_1.InvoiceDTO]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "addInvoice", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Query('invoiceID')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, invoice_dto_1.InvoiceDTO]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "updateInvoice", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Query('invoiceID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "deleteInvoice", null);
InvoiceController = __decorate([
    common_1.Controller('invoice'),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService, product_service_1.ProductService])
], InvoiceController);
exports.InvoiceController = InvoiceController;
//# sourceMappingURL=invoice.controller.js.map