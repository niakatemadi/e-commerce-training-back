import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from "../users/schemas/user.schema";
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService{

    constructor(
        @InjectModel(User.name)
        private UserModel: mongoose.Model<User>,
        private jwtService: JwtService 
    ){}

    async login(body : any): Promise<{ token:string, currentUser: User }>{

        try{
            const userFound = await this.UserModel.findOne({_id: body.email});

            if(!userFound){
                throw new UnauthorizedException('Email ou mot de passe incorrect');
            }

            const isPasswordMatched = await bcrypt.compare(body.hashedPassword, userFound.hashedPassword);

            if(!isPasswordMatched){
                throw new UnauthorizedException('Email ou mot de passe incorrect');
            }
            const token = this.jwtService.sign({id: userFound._id});

            return { token : token, currentUser : userFound };

        }catch(e){
            return e;
        }  
    }

    async signUp(newUser: User): Promise<{ token: string, currentUser: User }>{

        try{

            console.log(newUser);

            const userFound = await this.UserModel.findOne({email: newUser.email});

            if(userFound){
                throw new UnauthorizedException("email already used");
            }else {
                const cryptedPassword = await bcrypt.hash(newUser.hashedPassword,10);

                const user = await this.UserModel.create({
                    "_id" : newUser.email,
                    "firstName" : newUser.firstName,
                    "lastName" : newUser.lastName,
                    "email" : newUser.email,
                    "gender": newUser.gender,
                    "hashedPassword": cryptedPassword,
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

                const token = this.jwtService.sign({id: user._id});

                return { token : token, currentUser: user };
            }

        }catch(e){
            return e;
        }       
    }
}
