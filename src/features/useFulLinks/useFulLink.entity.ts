import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('useful_links')
export class UsefulLink {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 128 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    icon: string;

    @Column({ type: 'varchar', length: 128 })
    link: string;
}