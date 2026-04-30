import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import {Tag} from "@/features/tags/tag.entity";


@Entity('news')
export class News {
    @PrimaryGeneratedColumn()
    id: number;


    @ManyToMany(() => Tag, (tag) => tag.news)
    @JoinTable({
        name: 'newsTags',
        joinColumn: {
            name: 'newsId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'tagId',
            referencedColumnName: 'id',
        },
    })
    tags: Tag[];
}