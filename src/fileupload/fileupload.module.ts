import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUpload } from './entities/fileupload.entity';
import { BugreportService } from 'src/bugreport/bugreport.service';
import { Staff } from 'src/staff/entities/staff.entity';
import { StaffModule } from 'src/staff/staff.module';
import { BugreportModule } from 'src/bugreport/bugreport.module';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [TypeOrmModule.forFeature([FileUpload])],
  controllers: [FileuploadController],
  providers: [FileuploadService,],
})
export class FileuploadModule {}
