import { BaseModel } from '@/core/base-model';
import { Column, Entity } from 'typeorm';

@Entity('language-entity')
export class LanguageEntity extends BaseModel {
  @Column({ length: 64, unique: true})
  title!: string;
}
