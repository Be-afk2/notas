/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'apps/notas/entidades/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private UsersRepository: Repository<User>,



        private jwtService: JwtService,
    ) { }

    async findUserById(id : string) {
        return await this.UsersRepository.findOneBy({id : id});  
    }

    async findUserByCorreo(correo : string) {
        return await this.UsersRepository.findOneBy({correo : correo});  
    }

    async crearUser(user: CreateUserDto) {

        var newUser = await this.findUserByCorreo(user.correo)
        if(newUser)throw new Error("El correo ya existe");

        newUser = new User();
        newUser.correo = user.correo;
        newUser.password = user.password;
        newUser.nombre = user.nombre;
        newUser.apellido = user.apellido;
        await this.UsersRepository.save(newUser);
        
        return { token : await this.get_token(newUser)};
    }
    async get_token(user: User) {
        const payload = {
            id: user.id,
            nombre: user.nombre,
        };
        const token = this.jwtService.sign(payload);
        return token;
    }


}
