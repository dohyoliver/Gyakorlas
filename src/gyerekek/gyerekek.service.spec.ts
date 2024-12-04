import { Test, TestingModule } from '@nestjs/testing';
import { GyerekekService } from './gyerekek.service';

describe('GyerekekService', () => {
  let service: GyerekekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GyerekekService],
    }).compile();

    service = module.get<GyerekekService>(GyerekekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
