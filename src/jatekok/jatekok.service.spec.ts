import { Test, TestingModule } from '@nestjs/testing';
import { JatekokService } from './jatekok.service';

describe('JatekokService', () => {
  let service: JatekokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JatekokService],
    }).compile();

    service = module.get<JatekokService>(JatekokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
