import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag} from "@/features/tags/tag.entity";

@Entity('faqs')
export class Faq {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 256 })
    question: string;

    @Column({ type: 'varchar', length: 512 })
    answer: string;

    @ManyToMany(() => Tag, (tag) => tag.faqs)
    @JoinTable({
        name: 'faqs_tags',
        joinColumn: { name: 'faqsId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'tagId', referencedColumnName: 'id' },
    })
    tags: Tag[];
}