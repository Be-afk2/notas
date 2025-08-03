import { Controller, Get } from '@nestjs/common';
import { NotasApiService } from './notas-api.service';

@Controller()
export class NotasApiController {
  constructor(private readonly notasApiService: NotasApiService) {}

  @Get()
  getHello(): string {
    return this.notasApiService.getHello();
  }
}
