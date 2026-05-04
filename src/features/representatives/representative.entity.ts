import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Branch} from "@/features/branches/branch.entity";

@Entity('representatives')
export class Representative {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 128 })
  image: string;

  @Column({ type: 'varchar', length: 64 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  phoneNumber: string;

  @Column({ type: 'text' })
  resume: string;

  @OneToMany(() => Branch, (branch) => branch.representative)
  branches: Branch[];
}