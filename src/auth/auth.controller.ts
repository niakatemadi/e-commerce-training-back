import {Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/schemas/user.schema';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    async login(@Body() body){
        return this.authService.login(body);
    }

    @Post('signup')
    async signup(@Body() body : User){
      return this.authService.signUp( body);
    }
}