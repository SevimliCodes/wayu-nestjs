import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import {Tag} from "@/features/faqs/faqsTags/tag.entity";


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
        name: 'faqsTags',
        joinColumn: {
            name: 'faqsId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'tagId',
            referencedColumnName: 'id',
        },
    })
    tags: Tag[];
}