import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event} from "@/features/events/events/event.entity";

@Entity('event_categories')
export class EventCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64, unique: true })
    title: string;

    @OneToMany(() => Event, (event) => event.category)
    events: Event[];
}