import { BugReport } from "src/bugreport/entities/bugreport.entity";

export class CreateFileuploadDto {
    id: number;
    filename: string;
    filepath: string;
    uploadedAt: Date;
    bugReportId: number;
}
