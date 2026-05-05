import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('event_categories')
export class EventCategory extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64, unique: true })
    title: string;

    @OneToMany('Event', (event: any) => event.category)
    events: any[];
}