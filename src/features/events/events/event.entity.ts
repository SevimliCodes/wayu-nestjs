import { Column, Entity } from 'typeorm';
import { BaseModel } from '@/core/base-model';

export enum EventType {
  CONFERENCE = 'conference',
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export enum EventStatus {
  UPCOMING = 'upcoming',
  ONGOING = 'ongoing',
  DONE = 'done',
  CANCELLED = 'cancelled',
}

@Entity('events')
export class Event extends BaseModel {
  @Column({ length: 300 })
  titleUz!: string;

  @Column({ length: 300, nullable: true })
  titleRu?: string;

  @Column({ type: 'text', nullable: true })
  descriptionUz?: string;

  @Column({ type: 'text', nullable: true })
  descriptionRu?: string;

  @Column({ length: 256, nullable: true })
  coverUrl?: string;

  @Column({ type: 'enum', enum: EventType })
  eventType!: EventType;

  @Column({ length: 5, nullable: true })
  countryCode?: string;

  @Column({ length: 80, nullable: true })
  city?: string;

  @Column({ type: 'timestamptz' })
  startsAt!: string;

  @Column({ type: 'timestamptz', nullable: true })
  endsAt?: string;

  @Column({ type: 'enum', enum: EventStatus, default: EventStatus.UPCOMING })
  status!: EventStatus;
}
