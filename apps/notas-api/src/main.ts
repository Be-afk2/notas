import { NestFactory } from '@nestjs/core';
import { NotasApiModule } from './notas-api.module';
var cors = require('cors')
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(NotasApiModule);

  app.use(cors())
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // ? Configuracion para convertir los DTO implicitamente
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );


  await app.listen(process.env.port ?? 3000);
}
bootstrap();
