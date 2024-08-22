import { Role } from "src/role/entities/role.entity";

export class CreateStaffDto {
    id : number;
    username : string;
    role : number;
    email : string;
    password : string;
}
