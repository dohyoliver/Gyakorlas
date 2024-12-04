import { PartialType } from '@nestjs/mapped-types';
import { CreateGyerekekDto } from './create-gyerekek.dto';

export class UpdateGyerekekDto extends PartialType(CreateGyerekekDto) {}
