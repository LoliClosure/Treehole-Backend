import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseType } from "./utils/response";

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ResponseType{
    return this.appService.getHello();
  }

  // 可以匹配到 post请求，http://localhost:3000/app/list
  @Post("list")
  create():  ResponseType{
    return this.appService.getHello();
  }

  // 可以匹配到 get请求, http://localhost:3000/app/user_xxx
  @Get("user_*")
  getUser(){
    return "getUser"
  }

  @Put("list/user")
  updateUser(){
    return {userId:1}
  }

  @Put("list/:id")
  update(){
    return "update"
  }



}
