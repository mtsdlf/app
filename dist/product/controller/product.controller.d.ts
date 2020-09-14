import { ProductService } from '../service/product.service';
import { ProductDTO } from './../model/product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllProduct(res: any): Promise<any>;
    getProduct(res: any, productID: any): Promise<any>;
    addProduct(res: any, productDTO: ProductDTO): Promise<any>;
    updateProduct(res: any, productID: any, productDTO: ProductDTO): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
}
