import { Test, TestingModule } from '@nestjs/testing';
import { BugreportController } from './bugreport.controller';
import { BugreportService } from './bugreport.service';

describe('BugreportController', () => {
  let controller: BugreportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BugreportController],
      providers: [BugreportService],
    }).compile();

    controller = module.get<BugreportController>(BugreportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
