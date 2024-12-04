import { PartialType } from '@nestjs/mapped-types';
import { CreateJatekokDto } from './create-jatekok.dto';

export class UpdateJatekokDto extends PartialType(CreateJatekokDto) {}
