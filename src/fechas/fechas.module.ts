import { Module } from '@nestjs/common';
import { FechasService } from './fechas.service';
import { FechasController } from './fechas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FechasController],
  providers: [FechasService],
})
export class FechasModule {}

