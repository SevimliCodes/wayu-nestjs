import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum VacancySchedule {
  FULL_TIME = 'fullTime',
  PART_TIME = 'partTime',
}

export { VacancySchedule as VacancyType };

export enum VacancyStatus {
  ACTIVE   = 'active',
  INACTIVE = 'inactive',
  DRAFT    = 'draft',
}

@Entity('vacancies')
export class Vacancy extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  address: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: VacancySchedule,
    default: VacancySchedule.FULL_TIME,
  })
  type: VacancySchedule;

  @Column({
    type: 'enum',
    enum: VacancyStatus,
    default: VacancyStatus.ACTIVE,
  })
  status: VacancyStatus;

  @Column({ type: 'varchar', length: 64 })
  salary: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany('Application', (app: any) => app.vacancy)
  applications: any[];
}