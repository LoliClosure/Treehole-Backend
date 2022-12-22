import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Message } from "./Message";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Name: string

    @Column()
    age: number

    @OneToMany(type => Message, message => message.user)
    messages: Message[];

}
