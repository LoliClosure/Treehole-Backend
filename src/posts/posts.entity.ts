import { TagEntity } from './../tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { PostInfoDto } from './dto/post.dto';

@Entity('post')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  // 文章标题
  @Column({ length: 50 })
  title: string;

  // markdown内容
  @Column({ type: 'mediumtext', default: null })
  content: string;

  // markdown 转 html
  @Column({ type: 'mediumtext', default: null, name: 'content_html' })
  contentHtml: string;

  // 阅读量
  @Column({ type: 'int', default: 0 })
  count: number;

  // 点赞量
  @Column({ type: 'int', default: 0, name: 'like_count' })
  likeCount: number;


  // 作者
  @ManyToOne((type) => User, (user) => user.openid)
  author: User;

  //   @RelationId( (user:User) => user.posts)
  //   userId:User

  // 标签
  @ManyToMany(() => TagEntity, (tag) => tag.posts)
  @JoinTable({
    name: 'post_tag',
    joinColumns: [{ name: 'post_id' }],
    inverseJoinColumns: [{ name: 'tag_id' }],
  })
  tags: TagEntity[];

  @Column({
    type: 'timestamp',
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  toResponseObject(): PostInfoDto {
    const responseObj: PostInfoDto = {
        id: this.id,
        title: this.title,
        content: this.content,
        contentHtml: this.contentHtml,
        userId: this.author.openid,
        author: this.author.nickname,
        tags: this.tags.map((tag) => tag.name),
        count: this.count,
        likeCount: this.likeCount,
        createTime: this.createTime,
    };
    if (this.author && this.author.id) {
      responseObj.userId = this.author.id;
      responseObj.author = this.author.nickname || this.author.username;
    }
    return responseObj;
  }
}
