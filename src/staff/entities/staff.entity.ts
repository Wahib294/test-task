import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { BugReport } from '../../bugreport/entities/bugreport.entity';

@Entity()
@Unique(['username', 'email'])
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @ManyToOne(() => Role, (role) => role.staff)
  role: Role;

  @OneToMany(() => BugReport, (bugReport) => bugReport.assignee)
  assignedBugReports: BugReport[];

  @OneToMany(() => BugReport, (bugReport) => bugReport.reporter)
  reportedBugReports: BugReport[];
}
