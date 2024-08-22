import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { Staff} from "./entities/staff.entity";
import { Role } from 'src/role/entities/role.entity';
import { RoleModule } from 'src/role/role.module';
import { RoleService } from 'src/role/role.service';

@Module({
  imports : [TypeOrmModule.forFeature([Staff])],
  controllers: [StaffController],
  providers: [StaffService,RoleService],
  exports: [StaffService],
})
export class StaffModule {}
