import { Test, TestingModule } from '@nestjs/testing';
import { NotasApiController } from './notas-api.controller';
import { NotasApiService } from './notas-api.service';

describe('NotasApiController', () => {
  let notasApiController: NotasApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotasApiController],
      providers: [NotasApiService],
    }).compile();

    notasApiController = app.get<NotasApiController>(NotasApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notasApiController.getHello()).toBe('Hello World!');
    });
  });
});
