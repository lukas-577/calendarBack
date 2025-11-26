import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrismaService } from '../prisma/prisma.service';
import { ILike } from 'typeorm';

@Injectable()
export class FechasService {
  constructor(private prisma: PrismaService) {}

  async create (data: { fecha: string; horario: string; lugarId: number }) {
    return this.prisma.fechaHorario.create({
      data:{
        ...data,
        fecha : new Date(data.fecha)
      },
    });
  }

  findAll() {
    return this.prisma.fechaHorario.findMany({
      include: {lugar: true},
    });
  }

  findOne(id: number) {
    return this.prisma.fechaHorario.findUnique({ 
      where: { id },
     });
  }

  async update(id: number, data: { fecha: string; horario: string; lugarId: number }) {
    
    // Buscar si el registro existe
    const existing = await this.prisma.lugar.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        success: false,
        message: `No existe la fecha con el id ${id}.`,
      };
    }

    const update = this.prisma.fechaHorario.update({
      where: { id },
      data,
    });

    return{
      message: 'Fecha actualizada correctamente',
      update
    }
  }

  async remove(id: number) {
    // Buscar si el registro existe
    const existing = await this.prisma.reserva.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        success: false,
        message: `No existe la reserva con el id ${id}.`,
      };
    }
    await this.prisma.fechaHorario.delete({
      where: { id },
    });
    return { message: 'Fecha eliminada correctamente' };
  }


}


