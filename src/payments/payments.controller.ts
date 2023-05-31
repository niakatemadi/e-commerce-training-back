import { Body, Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './schemas/payment.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('payments')
export class PaymentsController {
    constructor(private paymentsService: PaymentsService){}

    @Post('addPayment')
    @UseGuards(AuthGuard())
    async createNewPayment(@Body() payment : Payment){

        return this.paymentsService.create(payment);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteOnePayment(@Param('id') id: String): Promise<String>{

        return this.paymentsService.deletePayment(id);
    }
}
