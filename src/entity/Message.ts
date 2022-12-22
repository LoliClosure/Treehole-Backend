import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  nickname: string;

  @ManyToOne(type => User, user => user.messages)
  user: User;

  @Column()
  likes: number;

  @Column()
  createAt: string;

  @Column()
  updatedAt: string;
}