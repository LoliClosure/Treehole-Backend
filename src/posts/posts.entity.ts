import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("posts")
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length:30 })
  title: string;

  @Column("text")
  content: string;

  @Column({ length:20 })
  nickname: string;

//  @ManyToOne(type => User, user => user.messages)
//  user: User;

  @Column()
  likes: number;

  @Column()
  createAt: Date;

  @Column()
  updatedAt: Date;
}