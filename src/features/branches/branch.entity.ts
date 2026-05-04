import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Country} from "@/features/countries/country.entity";
import { Representative} from "@/features/representatives/representative.entity";

@Entity('branches')
export class Branch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    countryId: number;

    @ManyToOne(() => Country, (country) => country.branches, {
        onDelete: 'RESTRICT',
    })
    @JoinColumn({ name: 'countryId' })
    country: Country;

    @Column()
    representativeId: number;

    @ManyToOne(() => Representative, (rep) => rep.branches, {
        onDelete: 'RESTRICT',
    })
    @JoinColumn({ name: 'representativeId' })
    representative: Representative;

    @Column({ type: 'varchar', length: 64 })
    city: string;

    @Column({ type: 'decimal', precision: 10, scale: 7 })
    latitude: number;

    @Column({ type: 'decimal', precision: 10, scale: 7 })
    longitude: number;

    @Column({ type: 'varchar', length: 16 })
    phoneNumber: string;
}