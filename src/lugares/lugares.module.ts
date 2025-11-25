import { Module } from '@nestjs/common';
import { LugaresController } from './lugares.controller';
import { LugaresService } from './lugares.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LugaresController],
  providers: [LugaresService]
})
export class LugaresModule {}
