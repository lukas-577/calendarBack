import { Controller, Post, Body, Get, Put,Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users') // Esto define la ruta base: /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // POST /users
  cretae(@Body() body: { nombre: string; email: string; reserva: number }) {
    return this.userService.create(body);
  }

  @Get() // GET /users
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
      return this.userService.findOne(Number(id));
  }

  @Put(':id')
  update(@Body() body: { usuarioId: number; fechaId : number; cantidad: number; estado: string },
         ) {
    return this.userService.update(Number(body.usuarioId), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(Number(id));
  }

  
}
