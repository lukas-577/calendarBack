import { Controller, Post, Get, Body, Delete,Put, Param, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { BadRequestException } from '@nestjs/common/exceptions';

@Controller('lugares')
export class LugaresController {
    constructor(private readonly lugaresService: LugaresService) {}

    @Post()
    create(@Body() body: { nombre: string; descripcion: string; imagen: string }) {
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

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('imagen', {
        storage: diskStorage({
            destination: './uploads/lugares',
            filename: (req, file, cb) => {
            const uniqueName =
                Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, uniqueName + extname(file.originalname));
            },
        }),
        }),
    )
    uploadImagen(
        @UploadedFile() file: Express.Multer.File,
        @Body() body: { nombre: string }
    ) {
        if (!file) {
            throw new BadRequestException('No se recibió ninguna imagen');
        }
        console.log("FILE:", file);
        console.log("BODY:", body);
        return {
        nombre: body.nombre,
        imagen: `/uploads/lugares/${file.filename}`,
        };
    }



}