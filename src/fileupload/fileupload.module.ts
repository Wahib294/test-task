import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUpload } from './entities/fileupload.entity';
import { BugreportModule } from 'src/bugreport/bugreport.module';

@Module({
  imports: [BugreportModule,TypeOrmModule.forFeature([FileUpload])],
  controllers: [FileuploadController],
  providers: [FileuploadService,],
})
export class FileuploadModule {}
