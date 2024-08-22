import { Column, Entity, OneToMany, PrimaryColumn, Unique } from 'typeorm';
import { Staff } from 'src/staff/entities/staff.entity';
@Entity()
@Unique(['name'])
export class Role {
  @PrimaryColumn({ length: 50 })
  name: string;
  @Column('int')
  id: number;

  @OneToMany(() => Staff, (staff) => staff.role)
  staff: Staff[];
}
