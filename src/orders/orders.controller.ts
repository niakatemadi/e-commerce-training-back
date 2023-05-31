import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './schemas/order.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @Get(':userId')
    @UseGuards(AuthGuard())
    async getUserGivenOrders(@Param('userId') userId: string): Promise<any>{

        return this.ordersService.findAll(userId)
    }

    @Post('addOrder')
    @UseGuards(AuthGuard())
    async addNewOrder(@Body() order: Order){

        return this.ordersService.create(order);
    }

}
