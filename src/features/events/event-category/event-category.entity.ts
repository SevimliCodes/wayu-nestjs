import {BaseModel} from "@/core/base-model";
import {Column, Entity} from "typeorm";

@Entity('event-category')
export class EventCategory extends BaseModel {
    @Column({length: 64, unique: true})
    title!: string;
}