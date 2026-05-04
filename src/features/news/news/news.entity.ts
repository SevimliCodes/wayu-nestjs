import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { NewsCategory} from "@/features/news/news-category/news-category.entity";
import { Country} from "@/features/countries/country.entity";
import { Tag } from "@/features/tags/tag.entity";

@Entity('news')
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryId: number;

    @ManyToOne(() => NewsCategory, (cat) => cat.news, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'categoryId' })
    category: NewsCategory;

    @Column({ nullable: true })
    countryId: number | null;

    @ManyToOne(() => Country, (country) => country.news, {
        nullable: true,
        onDelete: 'SET NULL',
    })
    @JoinColumn({ name: 'countryId' })
    country: Country | null;

    @Column({ type: 'varchar', length: 256 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    image: string;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'text' })
    content: string;

    @ManyToMany(() => Tag, (tag) => tag.news)
    @JoinTable({
        name: 'news_tags',
        joinColumn: { name: 'newsId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'tagId', referencedColumnName: 'id' },
    })
    tags: Tag[];
}