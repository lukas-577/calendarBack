import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fecha } from './fecha.entity';

@Injectable()
export class FechasService {
  constructor(
    @InjectRepository(Fecha)
    private readonly fechaRepo: Repository<Fecha>,
  ) {}

  create(fecha: string, hora: string, titulo:string) {
    const nuevaFecha = this.fechaRepo.create({ fecha, hora, titulo });
    return this.fechaRepo.save(nuevaFecha);
  }

  findAll() {
    return this.fechaRepo.find();
  }

  findOne(id: number) {
    return this.fechaRepo.findOneBy({ id });
  }

  async reservarHorario(data: { fecha: string; hora: string; usuario?: string }) {
    const horario = await this.fechaRepo.findOne({
      where: { fecha: data.fecha, hora: data.hora },
    });

    if (!horario) throw new Error('Horario no encontrado');
    if (horario.reservado) throw new Error('Ya está reservado');

    horario.reservado = true;
    horario.usuario = data.usuario || null;
    return this.fechaRepo.save(horario);
  }

  // Método para que el admin libere un horario
  async liberarHorario(id: number) {
    const horario = await this.fechaRepo.findOne({ where: { id } });
    if (!horario) throw new Error('Horario no encontrado');
    horario.reservado = false;
    horario.usuario = null;
    return this.fechaRepo.save(horario);
  }
}


