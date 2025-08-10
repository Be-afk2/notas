import { NestFactory } from '@nestjs/core';
import { WebModule } from './web.module';
import { NestExpressApplication } from '@nestjs/platform-express';
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
import * as session from 'express-session';
const cors = require('cors');
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(WebModule);

  app.use(cors());
  app.use(
    session({
      secret: process.env.JWT_SECRET ?? 'secret',
      resave: true,
      saveUninitialized: false,
    }),
  );
  console.log(join(__dirname, '../../../', 'public'))
  console.log("#########################################")
  app.use(expressLayouts);
  app.use(passport.initialize());
  app.use(passport.session());
  app.useStaticAssets(join(__dirname, '../../../', 'public'));
  app.setBaseViewsDir(join(__dirname, '../../../', 'views'));
  app.setViewEngine('ejs');
  await app.listen(process.env.PORTWEB ?? 4005);
}
bootstrap();
