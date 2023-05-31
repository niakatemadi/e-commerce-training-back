import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import  * as mongoose from 'mongoose';
import { Category, Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name)
        private ProductModel: mongoose.Model<Product>
    ){}

    async findAll(): Promise<any>{

        try{
            const products = await this.ProductModel.find();

            return products;

        }catch(e){
            return e;
        }     
    }

    async create(product: Product): Promise<any>{

        try{
            const res = await this.ProductModel.create(product);

            return res;

        }catch(e){
            return e;
        }     
    }

    async findByCategory(category: Category): Promise<any>{

        try{
            const products = this.ProductModel.find({ category }).exec();

            return products;

        }catch(e){
            return e;
        }
    }

    async deleteProduct(id: String): Promise<any>{

        try{

        const res = await this.ProductModel.findByIdAndRemove(id);

        return res;

        }catch(e){
            return e;
        }
    }
}
