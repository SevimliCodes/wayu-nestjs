import { BaseModel } from '@/core/base-model';
import {Entity, Column, OneToMany} from 'typeorm';
import {Branch} from "@/features/branches/branches.entity";

@Entity('representatives')
export class RepresentativesEntity extends BaseModel {
  @Column({ length: 64, unique:true})
  fullName!: string;

  @Column({ length: 128, unique: true})
  image!: string;

  @Column({ length: 64, unique: true})
  email!: string;

  @Column({ length: 20, unique: true})
  phoneNumber!: string;

  @Column({type: 'text', unique:true})
  resume!: string;

  @OneToMany(
      () => Branch,
      (branch) => branch.representative,
  )
  branches: Branch[];
}