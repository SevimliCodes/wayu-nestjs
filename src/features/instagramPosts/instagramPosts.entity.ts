import {Column, Entity} from "typeorm";

@Entity('instagramPosts')
export class InstagramPosts {
    @Column({length: 256, unique: true})
    image!: string;

    @Column({length: 128, unique: true})
    link!: string;
}