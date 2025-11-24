import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users') // Esto define la ruta base: /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // POST /users
  create(@Body() body: { name: string; email: string }) {
    return this.userService.create(body.name, body.email);
  }

  @Get() // GET /users
  findAll() {
    return this.userService.findAll();
  }
}
