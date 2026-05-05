import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum EventType {
  ONLINE  = 'online',
  OFFLINE = 'offline',
  HYBRID  = 'hybrid',
}

export enum EventStatus {
  UPCOMING  = 'upcoming',
  ONGOING   = 'ongoing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('events')
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'varchar', length: 128 })
  image: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'varchar', length: 128 })
  address: string;

  @Column({
    type: 'enum',
    enum: EventType,
    default: EventType.OFFLINE,
  })
  type: EventType;

  @Column({
    type: 'enum',
    enum: EventStatus,
    default: EventStatus.UPCOMING,
  })
  status: EventStatus;

  @ManyToOne('EventCategory', (cat: any) => cat.events, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'category_id' })
  category: any;
}