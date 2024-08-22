import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Staff } from "src/staff/entities/staff.entity";
@Entity()
@Unique(['name'])
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @OneToMany(() => Staff, staff => staff.role)
    staff: Staff[];
}