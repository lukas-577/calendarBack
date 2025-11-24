import { Test, TestingModule } from '@nestjs/testing';
import { FechasService } from './fechas.service';

describe('FechasService', () => {
  let service: FechasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FechasService],
    }).compile();

    service = module.get<FechasService>(FechasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
