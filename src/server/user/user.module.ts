import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from "../../entity/User";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "../../entity/Message";


@Module({
  imports: [TypeOrmModule.forFeature([User,Message])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
