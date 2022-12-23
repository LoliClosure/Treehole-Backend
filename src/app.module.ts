import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from '../config/env';
import { PostsModule } from './posts/posts.module';

import {ConfigModule,ConfigService} from "@nestjs/config";
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // 设置为全局
      envFilePath: [envConfig.path],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres', // 数据库类型
        entities: [],  // 数据表实体
        host: configService.get('DB_HOST', 'localhost'), // 主机，默认为localhost
        port: configService.get<number>('DB_PORT', 5432), // 端口，默认为5432
        username: configService.get('DB_USER', 'postgres'), // 用户名，默认为postgres
        password: configService.get('DB_PASSWORD', '020808'), // 密码
        database: configService.get('DB_DATABASE', 'treeholeDB'), // 数据库名
        timezone: '+08:00', //服务器上配置的时区
        synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
    }),
  }),
    PostsModule,
    UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}