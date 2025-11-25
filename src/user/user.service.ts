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
}
