import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import type { Book } from "@/features/books/books/book.entity";

@Entity()
export class BookCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}