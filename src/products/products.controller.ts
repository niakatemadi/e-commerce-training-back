import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Category, Product } from './schemas/product.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get('getAllProducts')
    async getAllProducts(): Promise<Product[]>{

        return this.productsService.findAll()
    }

    @Get(':category')
    async getProductsByCategory(@Param('category') category: Category): Promise<Product[]>{

        return this.productsService.findByCategory(category);
    }

    @Post('createProduct')
    @UseGuards(AuthGuard())
    async createProduct(@Body() product: Product){

        return this.productsService.create(product);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteOneProduct(@Param('id') id: String): Promise<String>{

        return this.productsService.deleteProduct(id);
    }


}
