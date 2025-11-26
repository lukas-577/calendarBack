import { ReservaService } from './reserva.service';
import { Controller, Post, Get, Put, Delete, Body, Param, Query } from '@nestjs/common';

@Controller('reserva')
export class ReservaController {
    constructor(private readonly reservaService: ReservaService) {}

    @Post()
    create(@Body() body: { usuarioId: number; fechaId: number; cantidad: number; estado: string }) {
        return this.reservaService.create(body);
    }
    @Get()
    findAll() {
        return this.reservaService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.reservaService.findOne(Number(id));
    }
    @Put(':id')
    update(@Param('id') id: string,
           @Body() body: { usuarioId: number; fechaId: number; cantidad: number; estado: string }
         ) {
        return this.reservaService.update(Number(id), body);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.reservaService.remove(Number(id));
    }
}
