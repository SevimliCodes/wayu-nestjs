import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum QuestionStatus {
    PENDING = 'pending',
    ANSWERED = 'answered',
    REPEATED = 'repeated',
    REJECTED = 'rejected',
}

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

    @Column({ type: 'varchar', length: 16 })
    phoneNumber: string;

    @Column({ type: 'varchar', length: 2000 })
    question: string;

    @Column({
        type: 'enum',
        enum: QuestionStatus,
        default: QuestionStatus.PENDING,
    })
    status: QuestionStatus;
}