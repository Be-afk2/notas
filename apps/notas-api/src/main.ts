import { NestFactory } from '@nestjs/core';
import { NotasApiModule } from './notas-api.module';

async function bootstrap() {
  const app = await NestFactory.create(NotasApiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
