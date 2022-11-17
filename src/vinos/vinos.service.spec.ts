import { Test, TestingModule } from '@nestjs/testing';
import { VinosService } from './vinos.service';

describe('VinosService', () => {
  let service: VinosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VinosService],
    }).compile();

    service = module.get<VinosService>(VinosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
