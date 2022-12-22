import { Injectable } from '@nestjs/common';
import { ResponseType } from "./utils/response";

@Injectable()
export class AppService {
  getHello(): ResponseType {
    return {
      code: 0,
      message: 'Hello World!',
      data: null,
    }
  }



}

