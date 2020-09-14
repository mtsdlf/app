import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { ProductDTO } from './../model/product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    // Retrieve products list
    @Get('products')
    async getAllProduct(@Res() res) {
        const products = await this.productService.getAllProduct();
        return res.status(HttpStatus.OK).json(products);
    }

    // Fetch a particular product using ID
    @Get('product/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException(`El producto ${productID} no existe!`);
        return res.status(HttpStatus.OK).json(product);

    }

    // add a product
    @Post('/create')
    async addProduct(@Res() res, @Body() productDTO: ProductDTO) {
        const product = await this.productService.addProduct(productDTO);
        console.log(productDTO)
        return res.status(HttpStatus.OK).json({
            message: "Producto Creado",
            product
        })
    }

    // Update a product's details
    @Put('/update')
    async updateProduct(@Res() res, @Query('productID') productID, @Body() productDTO: ProductDTO) {
        const product = await this.productService.updateProduct(productID, productDTO);
        if (!product) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: `Producto ${productID} actualizado`,
            product
        });
    }

    // Delete a product
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const product = await this.productService.deleteProduct(productID);
        if (!product) throw new NotFoundException(`El producto ${productID} no existe!`);
        return res.status(HttpStatus.OK).json({
            message: `Producto ${productID} eliminado`,
            product
        })
    }
}
