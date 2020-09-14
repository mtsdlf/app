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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../service/product.service");
const product_dto_1 = require("./../model/product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getAllProduct(res) {
        const products = await this.productService.getAllProduct();
        return res.status(common_1.HttpStatus.OK).json(products);
    }
    async getProduct(res, productID) {
        const product = await this.productService.getProduct(productID);
        if (!product)
            throw new common_1.NotFoundException(`El producto ${productID} no existe!`);
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async addProduct(res, productDTO) {
        const product = await this.productService.addProduct(productDTO);
        console.log(productDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Producto Creado",
            product
        });
    }
    async updateProduct(res, productID, productDTO) {
        const product = await this.productService.updateProduct(productID, productDTO);
        if (!product)
            throw new common_1.NotFoundException('Product does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: `Producto ${productID} actualizado`,
            product
        });
    }
    async deleteProduct(res, productID) {
        const product = await this.productService.deleteProduct(productID);
        if (!product)
            throw new common_1.NotFoundException(`El producto ${productID} no existe!`);
        return res.status(common_1.HttpStatus.OK).json({
            message: `Producto ${productID} eliminado`,
            product
        });
    }
};
__decorate([
    common_1.Get('products'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    common_1.Get('product/:productID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.ProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addProduct", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Query('productID')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, product_dto_1.ProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Query('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map