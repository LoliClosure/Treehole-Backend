import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('user')
  findAll(): string {
    return "All User's Info"; // [All User's Info] 暂时代替所有用户的信息
  }
}