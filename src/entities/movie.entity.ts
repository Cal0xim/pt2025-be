import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('movies')
export class Movie{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({nullable: true})
    description: string;
    @Column()
    duration: string;
    @Column({nullable: true})
    release_date: Date;
    @CreateDateColumn()
    createAt: Date;
    @UpdateDateColumn()
    updateAt: Date;
}