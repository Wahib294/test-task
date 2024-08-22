import { Module } from '@nestjs/common';
import { BugreportService } from './bugreport.service';
import { BugreportController } from './bugreport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BugReport } from './entities/bugreport.entity';
import { StaffModule } from 'src/staff/staff.module';

@Module({
  imports : [StaffModule,(TypeOrmModule.forFeature([BugReport]))],
  controllers: [BugreportController],
  providers: [BugreportService,],
  exports: [BugreportService]
})
export class BugreportModule {}
