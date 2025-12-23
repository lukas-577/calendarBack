import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LugaresService {
  constructor(private prisma: PrismaService) {}

  async create (data: { nombre: string; descripcion: string; imagen:string }) {
    return this.prisma.lugar.create({
      data,
    });
  }

  findAll() {
    return this.prisma.lugar.findMany({
      include: {fechas: true},
    });
  }

  async findOne(id: number) {
    const existing = await this.prisma.lugar.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        success: false,
        message: `No existe un lugar con el id ${id}.`,
      };
    }
    return this.prisma.lugar.findUnique({ 
      where: { id },
     });
  }

  async update(id: number, data: { nombre: string; descripcion: string }) {
    // 1. Verificar si no envió campos
    if (!data || Object.keys(data).length === 0) {
      return {
        success: false,
        message: 'No se enviaron datos para actualizar.',
      };
    }

    // Buscar si el registro existe
    const existing = await this.prisma.lugar.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        success: false,
        message: `No existe un lugar con el id ${id}.`,
      };
    }

    const updated = await this.prisma.lugar.update({
      where: { id },
      data,
    });

    return {
      success: true,
      message: 'Lugar actualizado correctamente',
      updated,
    };
  }


    async remove(id: number) {
    // Buscar si el registro existe
    const existing = await this.prisma.lugar.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        success: false,
        message: `No existe un lugar con el id ${id}.`,
      };
    }
    await this.prisma.lugar.delete({
      where: { id },
    });

    return { message: 'Lugar eliminado correctamente' };
  }



}
