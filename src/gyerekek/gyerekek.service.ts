import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekekService {
  constructor(private readonly db: PrismaService){}
  create(createGyerekekDto: CreateGyerekekDto) {
    return 'This action adds a new gyerekek';
  }

  findAll() {
    return this.db.gyerekek.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} gyerekek`;
  }
  async addToyToChild(childId: number, toyId: number): Promise<any> {
    try {
      // Fetch the child
      const child = await this.db.gyerekek.findUnique({
        where: { id: childId },
        include: { jatekok: true },
      });
  
      if (!child) {
        throw new NotFoundException(`Gyerek with ID ${childId} not found.`);
      }
  
      // Fetch the toy
      const toy = await this.db.jatekok.findUnique({
        where: { id: toyId },
      });
  
      if (!toy) {
        throw new NotFoundException(`Játék with ID ${toyId} not found.`);
      }
  
      // Add the toy to the child
      await this.db.gyerekek.update({
        where: { id: childId },
        data: {
          jatekok: {
            connect: { id: toyId },
          },
        },
      });
  
      return {
        message: 'Játék successfully added to gyerek.',
        childId,
        toyId,
      };
    } catch (error) {
      console.error('Error adding toy to child:', error);
  
      if (error instanceof NotFoundException) {
        throw error; // Propagate NotFound errors
      }
  
      // Handle unexpected errors
      throw new Error('Failed to add játék to gyerek.');
    }
  }
 
  
  async removeToyFromChild(childId: number, toyId: number) {
    return this.db.gyerekek.update({
      where: { id: childId },
      data: {
        jatekok: {
          disconnect: { id: toyId },
        },
      },
    });
  }
  update(id: number, updateGyerekekDto: UpdateGyerekekDto) {
    return `This action updates a #${id} gyerekek`;
  }

  remove(id: number) {
    return `This action removes a #${id} gyerekek`;
  }
}
