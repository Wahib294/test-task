import { Test, TestingModule } from '@nestjs/testing';
import { BugreportService } from './bugreport.service';

describe('BugreportService', () => {
  let service: BugreportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BugreportService],
    }).compile();

    service = module.get<BugreportService>(BugreportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
