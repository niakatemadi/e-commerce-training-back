import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ShippingAddress, User } from './schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get(':userId')
    @UseGuards(AuthGuard())
    async getUserGivenProfileDatas(@Param('userId') userId: string): Promise<User>{
        return this.usersService.getProfileDatas(userId);
    }

    @Post('login')
    async login(@Body() body){
        return this.usersService.login(body);
    }

    @Post('register')
    async createNewUser(@Body() body : User){
      return this.usersService.signUp(body);
    }

    @Put(':userId')
    @UseGuards(AuthGuard())
    async updateUserGivenShippingAddress(@Body() shippingAddress: ShippingAddress, @Param('userId') userId: string){
      return this.usersService.updateShippingAddress(shippingAddress, userId);
    }
}