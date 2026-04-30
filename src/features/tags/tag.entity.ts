import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
} from 'typeorm';
import {News} from "@/features/tags/newsTags/newsTags.entity";


@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64, unique: true })
    title: string;

    @ManyToMany(() => News, (news) => news.tags)
    news: News[];
}