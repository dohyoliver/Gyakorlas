import { Test, TestingModule } from '@nestjs/testing';
import { JatekokController } from './jatekok.controller';
import { JatekokService } from './jatekok.service';

describe('JatekokController', () => {
  let controller: JatekokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JatekokController],
      providers: [JatekokService],
    }).compile();

    controller = module.get<JatekokController>(JatekokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
