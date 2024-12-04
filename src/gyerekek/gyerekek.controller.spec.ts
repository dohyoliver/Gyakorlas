import { Test, TestingModule } from '@nestjs/testing';
import { GyerekekController } from './gyerekek.controller';
import { GyerekekService } from './gyerekek.service';

describe('GyerekekController', () => {
  let controller: GyerekekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GyerekekController],
      providers: [GyerekekService],
    }).compile();

    controller = module.get<GyerekekController>(GyerekekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
