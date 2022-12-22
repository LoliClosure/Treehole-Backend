import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseType } from "./utils/response";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ResponseType{
    return this.appService.getHello();
  }


}
