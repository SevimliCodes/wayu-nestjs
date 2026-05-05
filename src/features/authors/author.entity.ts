import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book} from "@/features/books/books/book.entity";

@Entity('authors')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name', type: 'varchar', length: 64 })
  fullName: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
