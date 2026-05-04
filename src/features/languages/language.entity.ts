import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('languages')
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  title: string;
}