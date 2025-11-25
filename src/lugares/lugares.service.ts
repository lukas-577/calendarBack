import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LugaresService {
  constructor(private prisma: PrismaService) {}

  async create (data: { nombre: string; descripcion: string; }) {
    return this.prisma.lugar.create({
      data,
    });
  }

  findAll() {
    return this.prisma.lugar.findMany({
      include: {fechas: true},
    });
  }

  findOne(id: number) {
    return this.prisma.lugar.findUnique({ 
      where: { id },
     });
  }



}
