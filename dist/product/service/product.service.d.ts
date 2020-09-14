import { Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';
import { ProductDTO } from '../model/product.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getAllProduct(): Promise<Product[]>;
    getProduct(productID: any): Promise<Product>;
    addProduct(createProductDTO: ProductDTO): Promise<Product>;
    updateProduct(productID: any, createProductDTO: ProductDTO): Promise<Product>;
    deleteProduct(productID: any): Promise<any>;
}
