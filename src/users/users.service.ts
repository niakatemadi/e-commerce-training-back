import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ShippingAddress, User } from './schemas/user.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name)
        private UserModel: mongoose.Model<User>
    ){}

    async getProfileDatas(userId : string): Promise<any>{

        try{
            const userFound = this.UserModel.findOne({_id: userId});
            if(!userFound){
                throw new UnauthorizedException("Error with that route");
            }
            return userFound;

        }catch(e){
            return e;
        }  
    }

    async login(body : any): Promise<any>{

        try{
            const userFound = await this.UserModel.findOne({_id: body.email});

            if(userFound && userFound.hashedPassword == body.hashedPassword){
                console.log("Utilisateur connecté");
                return userFound;

            }else{
                console.log("Email ou mot de passe incorrect");
                return "Email ou mot de passe incorrect";
            }

        }catch(e){
            return e;
        }  
    }


    async updateShippingAddress(newShippingAddress: ShippingAddress, userId: string){

        try{
            const userUpdated = this.UserModel.findOneAndUpdate({_id: userId},{
                shippingAddress : {
                    "city" : newShippingAddress.city,
                    "street" : newShippingAddress.street,
                    "postalCode" : newShippingAddress.postalCode,
                    "country" : newShippingAddress.country
                }
            },{new: true});

            return userUpdated;

        }catch(e){
            return e;
        }     
    }

    async signUp(newUser: User){

        try{

            console.log(newUser);

            const userFound = await this.UserModel.findOne({email: newUser.email});

            if(userFound){
                return "email already used";
            }else {
                const user = this.UserModel.create({
                    "_id" : newUser.email,
                    "firstName" : newUser.firstName,
                    "lastName" : newUser.lastName,
                    "email" : newUser.email,
                    "gender": newUser.gender,
                    "hashedPassword": newUser.hashedPassword,
                    "billingAddress" : {
                        "city" : "",
                        "street" : "",
                        "postalCode" : "",
                        "country" : ""
                    },
                    "shippingAddress" : {
                        "city" : "",
                        "street" : "",
                        "postalCode" : "",
                        "country" : ""
                    }
                });

                return user;
            }

        }catch(e){
            return `erreur d'inscription ${e}`;
        }       
    }
}
