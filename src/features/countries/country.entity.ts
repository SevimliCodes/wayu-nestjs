import {Column, Entity, OneToMany} from 'typeorm';
import { BaseModel } from '@/core/base-model';
import {Branch} from "@/features/branches/branches.entity";

@Entity('country')
export class CountryEntity extends BaseModel{
  @Column({length: 64, unique: true})
  title!: string;

  @Column({ length: 128, unique: true})
  flag!: string;

  @OneToMany(() => Branch, (branch) => branch.country)
  branches: Branch[];
}