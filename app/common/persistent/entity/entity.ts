import {Column, Generated, PrimaryGeneratedColumn} from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        default: new Date(),
    })
    public date_created: Date;

    @Column({
        default: null
    })
    public last_updated: Date;
}