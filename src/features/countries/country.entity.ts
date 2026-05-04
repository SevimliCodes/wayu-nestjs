import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { News} from "@/features/news/news/news.entity";
import { Branch} from "@/features/branches/branch.entity";

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  flag: string;

  @OneToMany(() => News, (news) => news.country)
  news: News[];

  @OneToMany(() => Branch, (branch) => branch.country)
  branches: Branch[];
}