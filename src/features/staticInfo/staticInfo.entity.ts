import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('static_info')
export class StaticInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 128, nullable: true })
    appStoreLink: string | null;

    @Column({ type: 'varchar', length: 128, nullable: true })
    playMarketLink: string | null;

    @Column({ type: 'text' })
    aboutUs: string;
}