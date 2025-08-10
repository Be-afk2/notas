/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto } from './dto/CreateUser.dto';
import { AuthService } from './auth.service';

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }


    @Get()
    @UseGuards(JwtAuthGuard)
    getHello(): string {
        return "Hello World!";
    }


    @Post()
    async CreateUser(@Body() data: CreateUserDto) {
        return await this.authService.crearUser(data);
    }
}
