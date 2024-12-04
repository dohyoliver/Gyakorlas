import { Module } from '@nestjs/common';
import { GyerekekService } from './gyerekek.service';
import { GyerekekController } from './gyerekek.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GyerekekController],
  providers: [GyerekekService, PrismaService],
})
export class GyerekekModule {}
