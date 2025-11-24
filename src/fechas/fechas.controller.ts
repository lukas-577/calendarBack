import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { FechasService } from './fechas.service';

@Controller('fechas')
export class FechasController {
  constructor(private readonly fechasService: FechasService) {}

  @Post()
  create(@Body() body: { fecha: string; hora: string ; titulo: string }) {
    return this.fechasService.create(body.fecha, body.hora, body.titulo);
  }

  // post para usuarios

  @Post('reservar')
  reservar(@Body() data: { fecha: string; hora: string; usuario?: string }) {
    return this.fechasService.reservarHorario(data);
  }

  @Get()
  findAll() {
    return this.fechasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.fechasService.findOne(id);
  }
}

