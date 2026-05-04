import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author} from "@/features/authors/author.entity";
import { BookCategory} from "@/features/books/books-category/book-category.entity";

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  authorId: number;

  @ManyToOne(() => Author, (author) => author.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'authorId' })
  author: Author;

  @Column()
  categoryId: number;

  @ManyToOne(() => BookCategory, (cat) => cat.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category: BookCategory;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  image: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'varchar', length: 256 })
  file: string;

  @Column({ type: 'int' })
  pages: number;

  @Column({ type: 'int' })
  year: number;
}