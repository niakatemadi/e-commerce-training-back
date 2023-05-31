import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class BillingAddress {
    @ApiProperty({
        description: "Customer's billing city"
    })
    @Prop({required : true})
    city: string;

    @ApiProperty({
        description: "Customer's billing street"
    })
    @Prop({required : true})
    street: string;

    @ApiProperty({
        description: "Customer's billing country"
    })
    @Prop({required : true})
    country: string;

    @ApiProperty({
        description: "Customer's billing postal code"
    })
    @Prop({required : true})
    postalCode: string;
}

export class ShippingAddress {
    @ApiProperty({
        description: "Customer's shipping city"
    })
    @Prop({required : true})
    city: string;

    @ApiProperty({
        description: "Customer's shipping street"
    })
    @Prop({required : true})
    street: string;

    @ApiProperty({
        description: "Customer's shipping country"
    })
    @Prop({required : true})
    country: string;

    @ApiProperty({
        description: "Customer's shipping postal code"
    })
    @Prop({required : true})
    postalCode: string;
}

@Schema({
    timestamps: true
})

export class User {

    @ApiProperty({
            description: "Customer's id",
            default: "test1@gmail.com"
        })
    @Prop({required : true})
    _id : string;

    @ApiProperty({
        description: "Customer's gender",
        default: "Mister"
    })
    @Prop({required : true})
    gender: string;

    @ApiProperty({
        description: "Customer's last name",
        default: "Martin"
    })
    @Prop({required : true})
    lastName: string;

    @ApiProperty({
        description: "Customer's first name",
        default: "Alexis"
    })
    @Prop({required : true})
    firstName: string;

    @ApiProperty({
        description: "Customer's email",
        default: "test1@gmail.com"
    })
    @Prop({required : true})
    email: string;

    @ApiProperty({
        description: "Customer's password",
        default: "MyPassword"
    })
    @Prop({required : true})
    hashedPassword: string;

    @ApiProperty({
        description: "Customer's billing address",
        default: {
            city: "Lille",
            country: 'France',
            street: "17 rue des tulipes",
            postalCode: "59000"
        }
    })
    billingAddress : BillingAddress;

    @ApiProperty({
        description: "Customer's shipping address",
        default: {
            city: "Lille",
            country: 'France',
            street: "17 rue des tulipes",
            postalCode: "59000"
        }
    })
    shippingAddress : ShippingAddress;
        
}

export const UserSchema = SchemaFactory.createForClass(User)