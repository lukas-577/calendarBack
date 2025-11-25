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

}
