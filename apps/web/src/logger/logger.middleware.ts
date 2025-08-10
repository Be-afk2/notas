import { Injectable, NestMiddleware, Request} from '@nestjs/common';
import {  Response, NextFunction,} from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(@Request() req, res: Response, next: NextFunction,) {
    res.setHeader('title', 'Notas');
    res.setHeader('description', 'NOTAS');

    if(!req.session.user) {
      console.log(process.env.WEB_PATH);
      return res.redirect(process.env.WEB_PATH + 'loginView');
    }
    next();
  }
}
