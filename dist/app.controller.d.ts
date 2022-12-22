import { AppService } from './app.service';
import { ResponseType } from "./utils/response";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): ResponseType;
}
