import { Test, TestingModule } from '@nestjs/testing';
import { FechasController } from './fechas.controller';

describe('FechasController', () => {
  let controller: FechasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FechasController],
    }).compile();

    controller = module.get<FechasController>(FechasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
