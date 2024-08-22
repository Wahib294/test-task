import { Injectable } from '@nestjs/common';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { Injector } from '@nestjs/core/injector/injector';
import { FileUpload } from './entities/fileupload.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BugreportService } from 'src/bugreport/bugreport.service';

@Injectable()
export class FileuploadService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly FileUploadRepository: Repository<FileUpload>,
    private readonly bugreportService: BugreportService,
  ) {}

  async create(createFileuploadDto: CreateFileuploadDto): Promise<FileUpload> {
    let fileUpload = new FileUpload();
    let bugReport = await this.bugreportService.findBOne(
      createFileuploadDto.bugReportId,
    );
    fileUpload.id = createFileuploadDto.id;
    fileUpload.filename = createFileuploadDto.filename;
    fileUpload.filepath = createFileuploadDto.filepath;
    fileUpload.bugReportId = bugReport.id;
    return this.FileUploadRepository.save(fileUpload);
  }

  findAll(): Promise<FileUpload[]> {
    return this.FileUploadRepository.find();
  }

  findOne(id: number): Promise<FileUpload[]> {
    return this.FileUploadRepository.find({ where: { bugReportId: id } });
  }

  async update(id: number, updateFileuploadDto: UpdateFileuploadDto) {
    let fileUpload = new FileUpload();
    let bugReport = await this.bugreportService.findBOne(
      updateFileuploadDto.bugReportId,
    );
    fileUpload.id = id;
    fileUpload.filename = updateFileuploadDto.filename;
    fileUpload.filepath = updateFileuploadDto.filepath;
    fileUpload.bugReportId = bugReport.id;
    return this.FileUploadRepository.save(fileUpload);
  }

  remove(id: number) {
    return `This action removes a #${id} fileupload`;
  }
}
