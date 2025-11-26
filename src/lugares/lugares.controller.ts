import { Controller, Post, Get, Body, Delete,Put, Param, Query } from '@nestjs/common';
import { LugaresService } from './lugares.service';

@Controller('lugares')
export class LugaresController {
    constructor(private readonly lugaresService: LugaresService) {}

    @Post()
    create(@Body() body: { nombre: string; descripcion: string }) {
        return this.lugaresService.create(body);
    }

    @Get()
    findAll() {
        return this.lugaresService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.lugaresService.findOne(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: string,
           @Body() body: { nombre: string; descripcion: string }
         ) {
    return this.lugaresService.update(Number(id), body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.lugaresService.remove(Number(id));
    }


}