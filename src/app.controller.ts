import { Controller, Get, Post, Delete, Req, Patch, Param, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //@Post()
  //store() {
  //  return 'Post request successful';
  //}

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() userId: number) {
    return userId;
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  //@Get()
  //@Redirect('https://www.dollarskenthouky.com', 302)
  //getSite() {
  //  return { url: 'https://google.com' };
  //}

  @Post()
  @HttpCode(204)
  create() {
    return 'This action adds you as a new user to the application.';
  }

  @Delete('/:userId')
  delete(@Param() params: { userId: number }) {
    return params;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }
}
