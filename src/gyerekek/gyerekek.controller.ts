import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GyerekekService } from './gyerekek.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Controller('gyerekek')
export class GyerekekController {
  constructor(private readonly gyerekekService: GyerekekService) {}

  @Post()
  create(@Body() createGyerekekDto: CreateGyerekekDto) {
    return this.gyerekekService.create(createGyerekekDto);
  }

  @Get()
  findAll() {
    return this.gyerekekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gyerekekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyerekekDto: UpdateGyerekekDto) {
    return this.gyerekekService.update(+id, updateGyerekekDto);
  }
  
  @Put(':childId/jatekok/:toyId')
 async addToyToChild(@Param('childId') childId: number, @Param('toyId') toyId: number) {
    const ajandek = await this.gyerekekService.addToyToChild(childId, toyId)
    if (!ajandek) {
      throw new Error('Failed to add játék to gyerek.');
    }
    return ajandek
  }
 
  @Delete(':childId/toys/:toyId')
  removeToyFromChild(@Param('childId') childId: number, @Param('toyId') toyId: number) {
    return this.gyerekekService.removeToyFromChild(childId, toyId);
  }
}
