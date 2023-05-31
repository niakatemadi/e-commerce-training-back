import { Injectable } from '@nestjs/common';
import { Payment } from './schemas/payment.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class PaymentsService {
    constructor(
        @InjectModel(Payment.name)
        private PaymenttModel: mongoose.Model<Payment>
    ){}

    async create(payment: Payment): Promise<any>{

        try{
            const res = await this.PaymenttModel.create(payment);

            return res;

        }catch(e){
            return e;
        }
    }

    async deletePayment(id: String): Promise<any>{

        try{
            const res = await this.PaymenttModel.findByIdAndDelete(id);

            return res;

        }catch(e){
            return e;
        }
    }
}
