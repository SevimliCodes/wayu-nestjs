import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { CountryEntity} from "@/features/countries/country.entity";
import { RepresentativesEntity} from "@/features/representatives/representatives.entity";

@Entity('branches')
export class Branch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    countryId: number;

    @Column()
    representativeId: number;

    @Column({ type: 'varchar', length: 64 })
    city: string;

    @Column({ type: 'decimal', precision: 10, scale: 7 })
    latitude: number;

    @Column({ type: 'decimal', precision: 10, scale: 7 })
    longitude: number;

    @Column({ type: 'varchar', length: 16 })
    phoneNumber: string;


    @ManyToOne(() => CountryEntity, (country) => country.branches, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'countryId' })
    country: CountryEntity;

    @ManyToOne(
        () => RepresentativesEntity,
        (rep) => rep.branches,
    )
    representative: RepresentativesEntity;
}