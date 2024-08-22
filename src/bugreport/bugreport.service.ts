//import { StaffService } from './../staff/staff.service';
import { Injectable } from '@nestjs/common';
import { CreateBugreportDto } from './dto/create-bugreport.dto';
import { UpdateBugreportDto } from './dto/update-bugreport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BugReport } from './entities/bugreport.entity';

@Injectable()
export class BugreportService {
  
  constructor(
    @InjectRepository(BugReport) private readonly bugReportRepository: Repository<BugReport>,
  //  private readonly staffService: StaffService
    ) {}

  async create(createBugreportDto: CreateBugreportDto) : Promise<BugReport> {
    let bugReport = new BugReport();
    //let assignee = await this.staffService.findOne(createBugreportDto.assignee);
    //let reporter = await this.staffService.findOne(createBugreportDto.reporter);
    bugReport.id = createBugreportDto.id;
    bugReport.title = createBugreportDto.title;
    bugReport.description = createBugreportDto.description;
    bugReport.status = createBugreportDto.status;
    //bugReport.assignee = assignee;
    //bugReport.reporter = reporter;
    bugReport.createdAt = createBugreportDto.createdAt;
    bugReport.updatedAt = createBugreportDto.updatedAt;

    return this.bugReportRepository.save(bugReport);
  }

  findAll() :Promise<BugReport[]> {
    return this.bugReportRepository.find();
  }

  findOne(id: number) :Promise<BugReport> {
    return this.bugReportRepository.findOneBy({id: id});
  }

  async update(id: number, updateBugreportDto: UpdateBugreportDto) {
    let bugReport = new BugReport();
    //let assignee = await this.staffService.findOne(updateBugreportDto.assignee);
    //let reporter = await this.staffService.findOne(updateBugreportDto.reporter);
    bugReport.id = id;
    bugReport.title = updateBugreportDto.title;
    bugReport.description = updateBugreportDto.description;
    bugReport.status = updateBugreportDto.status;
    //bugReport.assignee = assignee
    //bugReport.reporter = reporter;
    bugReport.createdAt = updateBugreportDto.createdAt;
    bugReport.updatedAt = updateBugreportDto.updatedAt;
    return this.bugReportRepository.save(bugReport);
  }

  remove(id: number) {
    return this.bugReportRepository.delete(id);
  }
}
