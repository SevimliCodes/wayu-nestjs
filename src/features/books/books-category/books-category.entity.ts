import { Column, Entity } from 'typeorm';
import { BaseModel } from "@/core/base-model";

@Entity('books_categories')
export class BooksCategory extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;
}
