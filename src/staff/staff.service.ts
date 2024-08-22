import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { RoleService } from 'src/role/role.service';
@Injectable()
export class StaffService {
  constructor(
    private readonly roleService: RoleService,
    @InjectRepository(Staff)
    readonly staffRepository: Repository<Staff>,
  ) {}

  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    let staff = new Staff();
    let role = await this.roleService.findOne(createStaffDto.role);
    console.log(createStaffDto.role);
    staff.id = createStaffDto.id;
    staff.username = createStaffDto.username;
    staff.email = createStaffDto.email;
    const salt = await bcrypt.genSalt();
    createStaffDto.password = await bcrypt.hash(createStaffDto.password, salt);
    staff.password = createStaffDto.password;
    staff.role = role;
    return this.staffRepository.save(staff);
  }

  async findAll(): Promise<Staff[]> {
    return this.staffRepository.find({ relations: ['role'] });
  }

  async findOne(id: number): Promise<Staff> {
    return this.staffRepository.findOne({where :{ id: id },relations: ['role']});
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    let staff = new Staff();
    let role = await this.roleService.findOne(updateStaffDto.role);
    staff.id = id;
    staff.username = updateStaffDto.username;
    staff.email = updateStaffDto.email;
    staff.password = updateStaffDto.password;
    staff.role = role;
    return this.staffRepository.save(staff);
  }

  remove(id: number) {
    return this.staffRepository.delete(id);
  }

  async findbyUsername(username: string): Promise<Staff> {
    return this.staffRepository.findOne({
      where: { username: username },
      relations: ['role'],
    });
  }
}
