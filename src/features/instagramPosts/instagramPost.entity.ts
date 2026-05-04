import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('instagram_posts')
export class InstagramPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 256 })
    image: string;

    @Column({ type: 'varchar', length: 128 })
    link: string;
}