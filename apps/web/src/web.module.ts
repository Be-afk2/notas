import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { WebController } from './web.controller';
import { WebService } from './web.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
  ],
  controllers: [WebController],
  providers: [WebService],
})
export class WebModule {
    configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('loginView', 'login',)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
