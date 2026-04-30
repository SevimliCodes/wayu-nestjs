import { Column, Entity } from 'typeorm';
import { BaseModel } from '@/core/base-model';

@Entity('books')
export class Book extends BaseModel {
  @Column({ length: 128 })
  titleUz!: string;

  @Column({ length: 128, nullable: true })
  titleRu?: string;

  @Column({ length: 128, nullable: true })
  author?: string;

  @Column({ length: 256, nullable: true })
  coverUrl?: string;

  @Column({ length: 256, nullable: true })
  fileUrl?: string;

  @Column({ length: 5 })
  lang!: string;

  @Column()
  downloadCount!: number;

  @Column()
  categoryId!: number;
}
