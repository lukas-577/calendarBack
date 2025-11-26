import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservaService {
    constructor(private prisma: PrismaService) {}

    async create (data: { usuarioId: number; fechaId : number; cantidad: number; estado: string }) {
        return this.prisma.reserva.create({
          data,
        });
    }
    findAll() {
        return this.prisma.reserva.findMany({
          include: {usuario: true, fecha: true},
         });
    }

    findOne(id: number) {
        return this.prisma.reserva.findUnique({ 
          where: { id },
         });
    }

    async update(id: number, data: { usuarioId: number; fechaId : number; cantidad: number; estado: string }) {
    // 1. Verificar si no envió campos
    if (!data || Object.keys(data).length === 0) {
      return {
        success: false,
        message: 'No se enviaron datos para actualizar.',
      };
    }

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

    const updated = await this.prisma.reserva.update({
      where: { id },
      data,
    });

    return {
      success: true,
      message: 'Reserva actualizada correctamente',
      updated,
    };
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
    await this.prisma.reserva.delete({
      where: { id },
    });

    return { message: 'Reserva eliminada correctamente' };
  }

}
