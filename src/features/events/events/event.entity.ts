import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventCategory} from "@/features/events/event-category/event-category.entity";

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => EventCategory, (cat) => cat.events, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category: EventCategory;

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
}