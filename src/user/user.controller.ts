import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  findAll(): string {
    return 'Get all users';
  }

  @Post('/')
  create(@Body() newUser: CreateUserDto) {
    return this.useService.create(newUser);
  }
}
