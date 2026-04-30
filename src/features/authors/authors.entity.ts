import { BaseModel } from '@/core/base-model';
import { Column, Entity } from 'typeorm';

@Entity('authors')
export class AuthorsEntity extends BaseModel {
  @Column({ length: 64, unique: true})
  fullName!: string;
}