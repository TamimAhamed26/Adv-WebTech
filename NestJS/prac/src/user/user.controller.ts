import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dtos/user/C_user.dto';  
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET request 
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  //  add a new user with validation
  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return this.userService.addUser(name, email);
  }
}
