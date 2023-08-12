import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    store(req: Request): ReadableStream<Uint8Array>;
    getUser(userId: number): number;
    findAll(): Promise<any[]>;
    create(): string;
    delete(params: {
        userId: number;
    }): {
        userId: number;
    };
    update(req: Request): ReadableStream<Uint8Array>;
}
