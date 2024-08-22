import { Module } from '@nestjs/common';
import { BugreportService } from './bugreport.service';
import { BugreportController } from './bugreport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BugReport } from './entities/bugreport.entity';
import { StaffModule } from 'src/staff/staff.module';
import { StaffService } from 'src/staff/staff.service';
import { RoleService } from 'src/role/role.service';
import { RoleModule } from 'src/role/role.module';
@Module({
  imports : [(TypeOrmModule.forFeature([BugReport]))],
  controllers: [BugreportController],
  providers: [BugreportService,],
  exports: [BugreportService]
})
export class BugreportModule {}
