import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  create(createRoleDto: CreateRoleDto): Promise<Role> {
    let role = new Role();
    role.id = createRoleDto.id;
    role.name = createRoleDto.name;
    return this.roleRepository.save(role);
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(name: string): Promise<Role> {
    return this.roleRepository.findOneBy({ name: name });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    let role = new Role();
    role.id = id;
    role.name = updateRoleDto.name;
    return this.roleRepository.save(updateRoleDto);
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
