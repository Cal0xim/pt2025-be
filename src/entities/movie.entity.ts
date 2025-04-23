import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Genre} from "./genre.entity";

@Entity('movies')
export class Movie{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({nullable: true})
    description: string;
    @Column({nullable: true})
    release_date: Date;
    @CreateDateColumn()
    createAt: Date;
    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(()=>Genre, (genre)=>genre.movies)
    @JoinColumn({name: 'genre_id'})
    genre: Genre;

}