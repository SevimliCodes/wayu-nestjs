import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { News} from "@/features/news/news/news.entity";
import { Faq} from "@/features/faqs/faq.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64, unique: true })
    title: string;

    @ManyToMany(() => News, (news) => news.tags)
    news: News[];

    @ManyToMany(() => Faq, (faq) => faq.tags)
    faqs: Faq[];
}