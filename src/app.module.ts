import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from "typeorm";
import { UserModule } from './server/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      autoLoadEntities: true,
    }
  ), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

