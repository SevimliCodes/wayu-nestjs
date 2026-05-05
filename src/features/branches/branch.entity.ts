import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country} from "@/features/countries/country.entity";
import { Representative } from '../representatives/representative.entity';

@Entity('branches')
export class BranchEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'country_id' })
  countryId: number;

  @Column({ name: 'representative_id' })
  representativeId: number;

  @Column({ type: 'varchar', length: 64 })
  city: string;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  longitude: number;

  @Column({ name: 'phone_number', type: 'varchar', length: 16 })
  phoneNumber: string;

  @ManyToOne(() => Country, { onDelete: 'RESTRICT', eager: false })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @ManyToOne(() => Representative, { onDelete: 'RESTRICT', eager: false })
  @JoinColumn({ name: 'representative_id' })
  representative: Representative;
}
