import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../interfaces/product.interface';
import { ProductDTO } from '../model/product.dto'

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    // fetch all products
    async getAllProduct(): Promise<Product[]> {
        const products = await this.productModel.find().exec();
        return products;
    }

    // Get a single product
    async getProduct(productID): Promise<Product> {
        const product = await this.productModel.findById(productID).exec();
        return product;
    }

    // post a single product
    async addProduct(createProductDTO: ProductDTO): Promise<Product> {
        const newProduct = await this.productModel(createProductDTO);
        return newProduct.save();
    }

    // Edit product details
    async updateProduct(productID, createProductDTO: ProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel
            .findByIdAndUpdate(productID, createProductDTO, { new: true });
        return updatedProduct;
    }

    // Delete a product
    async deleteProduct(productID): Promise<any> {
        const deletedProduct = await this.productModel.findByIdAndRemove(productID);
        return deletedProduct;
    }

}
