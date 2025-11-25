import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { FechasService } from './fechas.service';

@Controller('fechas')
export class FechasController {
  constructor(private readonly fechasService: FechasService) {}

  @Post()
  create(@Body() body) {
    return this.fechasService.create(body);
  }

  @Get()
  findAll() {
    return this.fechasService.findAll();
  }
}

