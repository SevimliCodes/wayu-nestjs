import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
} from 'typeorm';
import {Faq} from "@/features/faqs/faq.entity";


@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64 })
    name: string;

    @ManyToMany(() => Faq, (faq) => faq.tags)
    faqs: Faq[];
}