import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { stringify } from 'querystring';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('role') role?: string): string {
    if(role === undefined){
      return this.appService.getHello();
    } 
    else{
      return role;
    }
  }

  @Post("/MSG")
  create(@Body() users: {username: string}): string {
    return users.username
  }
}
