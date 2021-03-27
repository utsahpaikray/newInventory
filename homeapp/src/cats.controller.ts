import { Request } from 'express';
import { Controller, Get,Param,Req } from '@nestjs/common';
import { Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'req';
  }
  @Post()
  create(): string {
    return 'This action adds a new cat successfully';
  }
}
