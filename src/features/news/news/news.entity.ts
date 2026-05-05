import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('news')
export class News extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'category_id' })
    categoryId: number;

    @Column({ name: 'country_id', nullable: true })
    countryId: number | null;

    @Column({ type: 'varchar', length: 256 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    image: string;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'text' })
    content: string;

    @ManyToOne('NewsCategory', (cat: any) => cat.news, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'category_id' })
    category: any;

    @ManyToOne('Country', { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'country_id' })
    country: any;

    @ManyToMany('Tag', { cascade: true })
    @JoinTable({
        name: 'news_tags',
        joinColumn: { name: 'news_id' },
        inverseJoinColumn: { name: 'tag_id' },
    })
    tags: any[];
}