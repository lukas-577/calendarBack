import { ReservaService } from './reserva.service';
import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';

@Controller('reserva')
export class ReservaController {
    constructor(private readonly reservaService: ReservaService) {}

    @Post()
    create(@Body() body) {
        return this.reservaService.create(body);
    }
    @Get()
    findAll() {
        return this.reservaService.findAll();
    }
}
