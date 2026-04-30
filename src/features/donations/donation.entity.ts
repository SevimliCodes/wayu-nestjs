import { BaseModel } from '@/core/base-model';
import { Entity, Column } from 'typeorm';

@Entity('donations')
export class DonationEntity extends BaseModel {
  @Column({type: 'decimal', unique: true})
  amount!: number;

  @Column({type: 'timestamp', unique: true})
  date!: Date;

  @Column({length: 256, unique: true})
  title!: string;

  @Column({type: 'text', nullable: true})
  description?: string;

  @Column({length: 64, unique: true})
  transactionId!: string;
}
