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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let InvoiceService = class InvoiceService {
    constructor(invoiceModel) {
        this.invoiceModel = invoiceModel;
    }
    async getAllInvoice() {
        const invoices = await this.invoiceModel.find()
            .populate('order')
            .exec();
        return invoices;
    }
    async getInvoice(invoiceID) {
        const invoice = await this.invoiceModel.findById(invoiceID).populate('order').exec();
        return invoice;
    }
    async addInvoice(InvoiceDTO) {
        const newInvoice = await this.invoiceModel(InvoiceDTO);
        return newInvoice.save();
    }
    async updateInvoice(invoiceID, InvoiceDTO) {
        const updatedInvoice = await this.invoiceModel
            .findByIdAndUpdate(invoiceID, InvoiceDTO, { new: true });
        return updatedInvoice;
    }
    async deleteInvoice(invoiceID) {
        const deletedInvoice = await this.invoiceModel.findByIdAndRemove(invoiceID);
        return deletedInvoice;
    }
};
InvoiceService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Invoice')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map