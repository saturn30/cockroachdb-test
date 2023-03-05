import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUserMany() {
    const start = Date.now();
    const result = await this.userService.findUserMany();
    return {
      time: Date.now() - start,
      result,
    };
  }

  @Get(':id')
  async getUesr(@Param('id') id: number) {
    const start = Date.now();
    const result = await this.userService.findUserById(id);
    return {
      time: Date.now() - start,
      result,
    };
  }

  @Post()
  async createUser() {
    const start = Date.now();
    const result = await this.userService.createUser();
    return { time: Date.now() - start, result };
  }
}
