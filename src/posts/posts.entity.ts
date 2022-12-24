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

  // 摘要，自动生成
  @Column({ type: 'text', default: null })
  summary: string;

  // 阅读量
  @Column({ type: 'int', default: 0 })
  count: number;

  // 点赞量
  @Column({ type: 'int', default: 0, name: 'like_count' })
  likeCount: number;

  // 推荐显示
  @Column({ type: 'tinyint', default: 0, name: 'is_recommend' })
  isRecommend: number;

  // 文章状态
  @Column('simple-enum', { enum: ['draft', 'publish'] })
  status: string;

  // 作者
  @ManyToOne((type) => User, (user) => user.nickname)
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

  @Column({ type: 'timestamp', name: 'publish_time', default: null })
  publishTime: Date;

  @Column({
    type: 'timestamp',
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  toResponseObject(): PostInfoDto {
    const responseObj: PostInfoDto = {
      ...this,
      isRecommend: this.isRecommend ? true : false,
    };
    if (this.tags && this.tags.length) {
      responseObj.tags = this.tags.map((item) => item.name);
    }
    if (this.author && this.author.id) {
      responseObj.userId = this.author.id;
      responseObj.author = this.author.nickname || this.author.username;
    }
    return responseObj;
  }
}
