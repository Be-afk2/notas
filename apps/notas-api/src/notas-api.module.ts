import { Module } from '@nestjs/common';
import { NotasApiController } from './notas-api.controller';
import { NotasApiService } from './notas-api.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notas } from 'apps/notas/entidades/notas.entity';
import { Seccion } from 'apps/notas/entidades/seccion.entity';
import { User } from 'apps/notas/entidades/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        User,
        Seccion,
        Notas
      ],
      synchronize: false,
    }),
  ],
  controllers: [NotasApiController],
  providers: [NotasApiService],
})
export class NotasApiModule {}
