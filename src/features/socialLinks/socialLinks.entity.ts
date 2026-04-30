import {BaseModel} from "@/core/base-model";
import {Column, Entity} from "typeorm";

@Entity('socialLinks')
export class SocialLinks extends BaseModel{
    @Column({length: 64, unique: true})
    title!: string;

    @Column({length: 128, unique: true})
    icon!: string;

    @Column({length: 128, unique: true})
    link!: string;
}