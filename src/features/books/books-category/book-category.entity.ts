import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book} from "@/features/books/books/book.entity";

@Entity('book_categories')
export class BookCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}
