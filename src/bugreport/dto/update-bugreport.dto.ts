import { PartialType } from '@nestjs/mapped-types';
import { CreateBugreportDto } from './create-bugreport.dto';

export class UpdateBugreportDto extends PartialType(CreateBugreportDto) {}
