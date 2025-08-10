/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'apps/notas/entidades/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private UsersRepository: Repository<User>,



        private jwtService: JwtService,
    ) { }


    async get_token(user: User) {
        const payload = {
            id: user.id,
            nombre: user.nombre,
        };
        const token = this.jwtService.sign(payload);
        return token;
    }


}
