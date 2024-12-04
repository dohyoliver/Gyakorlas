import { Module } from '@nestjs/common';
import { JatekokService } from './jatekok.service';
import { JatekokController } from './jatekok.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JatekokController],
  providers: [JatekokService , PrismaService],
})
export class JatekokModule {}
