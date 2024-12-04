import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JatekokModule } from './jatekok/jatekok.module';
import { GyerekekModule } from './gyerekek/gyerekek.module';

@Module({
  imports: [JatekokModule, GyerekekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
