import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class Card {

    @ApiProperty()
    @Prop({required : true})
    type: string;

    @ApiProperty()
    @Prop({required : true})
    lastFourNumbers: string;

    @ApiProperty()
    @Prop({required : true})
    expiryMonth: number;

    @ApiProperty()
    @Prop({required : true})
    expiryYear: number;

    @ApiProperty()
    @Prop({required : true})
    cvvVerified: boolean;

}

@Schema({
    timestamps: true
})

export class Payment {

    @ApiProperty()
    @Prop({required : true})
    _id: string;

    @ApiProperty()
    @Prop({required : true})
    userId: string;

    @ApiProperty()
    @Prop({required : true})
    type: string;

    @ApiProperty()
    @Prop({required : true})
    status: string;

    @ApiProperty()
    @Prop({required : true})
    card: Card;

}

export const PaymentSchema = SchemaFactory.createForClass(Payment);