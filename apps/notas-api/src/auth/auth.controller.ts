/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller("auth")
export class AuthController { 


    @Get()
    @UseGuards(JwtAuthGuard)
    getHello(): string {
        return "Hello World!";
    }
}
