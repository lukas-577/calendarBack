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
      data,
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



}


