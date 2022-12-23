import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { PostsEntity } from './posts.entity';
import { Module } from "@nestjs/common";


@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  controllers: [PostsController],
  providers: [PostsService]

})
export class PostsModule {}