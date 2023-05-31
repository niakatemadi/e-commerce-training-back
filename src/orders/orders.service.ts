import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel(Order.name)
        private OrderModel: mongoose.Model<Order>
    ){}

    async findAll(userId: string): Promise<any>{

        try{
            const orders = await this.OrderModel.find({userId}).exec();

            return orders;

        }catch(e){
            return e;
        }
        
    }

    async create(order: Order): Promise<any>{

        try{
            const res = await this.OrderModel.create(order);

            return res;

        }catch(e){
            return e;
        }
       
    }

}
