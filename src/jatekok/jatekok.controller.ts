import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { JatekokService } from './jatekok.service';
import { CreateJatekokDto } from './dto/create-jatekok.dto';
import { UpdateJatekokDto } from './dto/update-jatekok.dto';

@Controller('jatekok')
export class JatekokController {
  constructor(private readonly jatekokService: JatekokService) {}

  @Post()
  create(@Body() createJatekokDto: CreateJatekokDto) {
    return this.jatekokService.create(createJatekokDto);
  }

  @Get()
  findAll() {
    return this.jatekokService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const jatek = await this.jatekokService.findOne(+id);
    if(!jatek){
      throw new NotFoundException('No game with this id')
    }
    return jatek;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateJatekokDto: UpdateJatekokDto) {
    const jatek = await this.jatekokService.update(+id, updateJatekokDto);
    if(!jatek){
      throw new NotFoundException('No game with this id')
    }
    return jatek;
  }

  @Delete(':id')
  async  remove(@Param('id') id: string) {
    if (!await this.jatekokService.remove(+id)){
      throw new  NotFoundException('No game with this id')
    }
  }
}
