import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { BillingAddress, ShippingAddress } from "src/users/schemas/user.schema";


@Schema({
    timestamps: true
})

export class Order {

    @ApiProperty()
    @Prop({required : true})
    userId: string;

    @ApiProperty()
    @Prop({required : true})
    paymentStatus: string;

    @ApiProperty()
    @Prop({required : true})
    orderStatus: string;

    @ApiProperty()
    @Prop({required : true})
    totalAmount: number;

    @ApiProperty()
    @Prop({required : true})
    items: Array<Object>;

    @ApiProperty()
    @Prop({required : true})
    billingAddress: BillingAddress;

    @ApiProperty()
    @Prop({required : true})
    shippingAddress: ShippingAddress;

    @ApiProperty()
    @Prop({required : true})
    trackingNumber: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);