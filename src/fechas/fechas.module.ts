import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FechasController } from './fechas.controller';
import { FechasService } from './fechas.service';
import { Fecha } from './fecha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fecha])],
  controllers: [FechasController],
  providers: [FechasService]
})
export class FechasModule {}
