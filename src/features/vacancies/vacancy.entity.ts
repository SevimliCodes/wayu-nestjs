import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Application} from "@/features/applications/application.entity";

export enum VacancyType {
  FULL_TIME = 'fullTime',
  PART_TIME = 'partTime',
}

@Entity('vacancies')
export class Vacancy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  address: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'enum', enum: VacancyType })
  type: VacancyType;

  @Column({ type: 'varchar', length: 64 })
  salary: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => Application, (app) => app.vacancy)
  applications: Application[];
}