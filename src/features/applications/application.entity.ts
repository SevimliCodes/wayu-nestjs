import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Vacancy} from "@/features/vacancies/vacancy.entity";


export enum ApplicationStatus {
    ACTIVE = 'active',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
}

@Entity('applications')
export class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

    @Column({ type: 'varchar', length: 16 })
    phoneNumber: string;

    @Column({ type: 'varchar', length: 64 })
    email: string;

    @Column()
    vacancyId: number;

    @ManyToOne(
        () => require('../vacancies/entities/vacancy.entity').Vacancy,
        (vacancy: { applications: any; }) => vacancy.applications,
    )
    vacancy: any;

    @Column({ type: 'varchar', length: 128 })
    resume: string;

    @Column({
        type: 'enum',
        enum: ApplicationStatus,
        default: ApplicationStatus.ACTIVE,
    })
    status: ApplicationStatus;
}