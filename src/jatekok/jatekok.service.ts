import { Injectable } from '@nestjs/common';
import { CreateJatekokDto } from './dto/create-jatekok.dto';
import { UpdateJatekokDto } from './dto/update-jatekok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekokService {
  constructor(private readonly db: PrismaService){}
  
  create(createJatekokDto: CreateJatekokDto) {
    return this.db.jatekok.create({
     data: createJatekokDto
  })
  }

  findAll() {
    return this.db.jatekok.findMany();
  }

  findOne(id: number) {
    return this.db.jatekok.findUnique({where: {id: id}});
  }

  async update(id: number, updateJatekokDto: UpdateJatekokDto) {
    try{
      return await this.db.jatekok.update({
        data: updateJatekokDto,
        where: {id}
      })
  } catch{
    return undefined;
  }
 }
  async remove(id: number) {
    try{
      await this.db.jatekok.delete({
        where: {id}
      })
      return true;
    }catch{
      return false
    }
  }
}
