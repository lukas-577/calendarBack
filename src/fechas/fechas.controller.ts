import { Controller, Post, Get, Body,Put, Param,Delete, Query } from '@nestjs/common';
import { FechasService } from './fechas.service';

@Controller('fechas')
export class FechasController {
  constructor(private readonly fechasService: FechasService) {}

  @Post()
  create(@Body() body: { fecha: string; horario: string; lugarId: number }) {
    return this.fechasService.create(body);
  }

  @Get()
  findAll() {
    return this.fechasService.findAll();
  }
  @Put(':id')
  update(@Param('id') id: number,
          @Body() body: { fecha: string; horario: string; lugarId: number }
        ) {
    return this.fechasService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.fechasService.remove(id);
  }

}

