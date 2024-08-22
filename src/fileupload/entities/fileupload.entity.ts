import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BugReport } from "../../bugreport/entities/bugreport.entity";

@Entity("fileupload")
export class FileUpload {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    filename: string;

    @Column({ length: 255 })
    filepath: string;

    @CreateDateColumn({ type: 'timestamp' })
    uploadedAt: Date;

    @ManyToOne(() => BugReport, bugReport => bugReport.fileUploads)
    bugReportId: number;
}
