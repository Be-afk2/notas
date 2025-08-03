import { Injectable } from '@nestjs/common';

@Injectable()
export class NotasApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
