import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export enum Category {
    HUILE = 'Huile',
    BAUME = 'Baume',
    ADOUCISSANT = "Adoucissant",
    DEODORANT = "Deodorant",
    PARFUM = "Parfum",
    SHAMPOING = "Shampoing",
    PEIGNE = "Peigne",
    BROSSE = "Brosse"  
}

@Schema({
    timestamps: true
})

export class Product {

    @ApiProperty({
        description: "Product's quantity",
        default: 1
    })
    @Prop({required : true})
    quantity: number;

    @ApiProperty({
        description: "Percentage discounts",
        default: 0
    })
    @Prop({required : true})
    discounts: number;

    @ApiProperty({
        description: "Price before taxes",
        default: 20
    })
    @Prop({required : true})
    beforeTax: number;

    @ApiProperty({
        description: "Price after taxes",
        default: 22.50
    })
    @Prop({required : true})
    afterTax: number;

    @ApiProperty({
        description: "Product's title",
        default: "Baume citron & patchouli"
    })
    @Prop({required : true})
    title: string;

    @ApiProperty({
        description: "Product's description",
        default: "Baume à barbe aux huiles essentielles fabriqué en France."
    })
    @Prop({required : true})
    description: string;

    @ApiProperty({
        description: "Product's price",
        default: 20
    })
    @Prop({required : true})
    price: number;

    @ApiProperty({
        description: "Product's category",
        default: "Baume"
    })
    @Prop({required : true})
    category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);