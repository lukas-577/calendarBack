import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users') // Esto define la ruta base: /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // POST /users
  cretae(@Body() body) {
    return this.userService.create(body);
  }

  @Get() // GET /users
  findAll() {
    return this.userService.findAll();
  }
}
