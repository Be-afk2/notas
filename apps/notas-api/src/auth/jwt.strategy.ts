import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from "./auth.service";
import { PassportStrategy } from '@nestjs/passport';
import { User } from "apps/notas/entidades/user.entity";
import { JWTPayload } from "./interfaces/JWTPayload";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate({ id }: JWTPayload): Promise<User> { // ??????
    const user = await this.usersService.findUserById(id);
    if (!user) throw new UnauthorizedException(`Usuario no autorizado`);
    delete user.password;
    return user;
  }
}