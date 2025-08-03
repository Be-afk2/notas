import { Module } from '@nestjs/common';
import { NotasApiController } from './notas-api.controller';
import { NotasApiService } from './notas-api.service';

@Module({
  imports: [],
  controllers: [NotasApiController],
  providers: [NotasApiService],
})
export class NotasApiModule {}
