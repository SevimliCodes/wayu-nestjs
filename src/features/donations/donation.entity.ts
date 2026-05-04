import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PaymentProvider {
  PAYME = 'payme',
  CLICK = 'click',
  OSON = 'oson',
}

@Entity('donations')
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'varchar', length: 64 })
  transactionId: string;
}
