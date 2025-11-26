import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nombre: string; email: string; reserva: number }) {
    return this.prisma.usuario.create({
      data,
    });
  }

  findAll() {
    return this.prisma.usuario.findMany({
      include: {reservas: true},
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
