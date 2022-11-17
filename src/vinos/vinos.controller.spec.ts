import { Test, TestingModule } from '@nestjs/testing';
import { VinosController } from './vinos.controller';
import { VinosService } from './vinos.service';

describe('VinosController', () => {
  let controller: VinosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VinosController],
      providers: [VinosService],
    }).compile();

    controller = module.get<VinosController>(VinosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
