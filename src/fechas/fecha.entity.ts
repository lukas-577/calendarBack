import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fecha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: string; // formato YYYY-MM-DD

  @Column({ type: 'time' })
  hora: string; // formato HH:mm:ss

  @Column({ type: 'varchar', length: 255, nullable: true })
  titulo: string;

  @Column({ default: false })
  reservado: boolean;

  @Column({ nullable: true,  type: 'text' })
  usuario: string | null;
}
