import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Staff } from "../../staff/entities/staff.entity";
import { FileUpload } from "../../fileupload/entities/fileupload.entity";

@Entity("bugreport")
export class BugReport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    title: string;

    @Column('text')
    description: string;

    @Column()
    status: true | false;

    @ManyToOne(() => Staff, staff => staff.assignedBugReports)
    assignee: Staff;

    @ManyToOne(() => Staff, staff => staff.reportedBugReports)
    reporter: Staff;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => FileUpload, fileUpload => fileUpload.bugReportId)
    fileUploads: FileUpload[];
}
