import {Column, Entity, OneToMany} from 'typeorm';
import { BaseModel } from '@/core/base-model';
import {Application} from "@/features/applications/application.entity";

export enum VacancySchedule {
  FULL = 'full',
  HALF = 'half',
  REMOTE = 'remote',
}

export enum VacancyStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

@Entity('vacancies')
export class Vacancy extends BaseModel {
  @Column({ length: 200 })
  titleUz!: string;

  @Column({ length: 200, nullable: true })
  titleRu?: string;

  @Column({ type: 'text', nullable: true })
  descriptionUz?: string;

  @Column({ type: 'text', nullable: true })
  descriptionRu?: string;

  @Column({ length: 100, nullable: true })
  locationUz?: string;

  @Column({ length: 5, nullable: true })
  countryCode?: string;

  @Column({ nullable: true })
  salaryMin?: number;

  @Column({ nullable: true })
  salaryMax?: number;

  @Column({ length: 60, nullable: true })
  salaryText?: string;

  @Column({ type: 'enum', enum: VacancySchedule })
  schedule!: VacancySchedule;

  @Column({ type: 'enum', enum: VacancyStatus, default: VacancyStatus.OPEN })
  status!: VacancyStatus;

  @OneToMany(() => Application, (application) => application.vacancy)
  applications: Application[];
}
