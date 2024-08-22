import { Role } from 'src/role/entities/role.entity';

export class CreateStaffDto {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}
