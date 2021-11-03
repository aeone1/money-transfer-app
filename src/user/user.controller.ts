import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from 'src/entity/user/User';
import {
  CreateUserDto,
  FindUserResponseDto,
  UpdateUserDto,
  UserResponseDto,
  UserBalanceResponseDto,
} from './data-transfer-object/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get('/:userId')
  getUserById(@Param('userId') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Post()
  registerUser(@Body() body: User): Promise<User> {
    return this.userService.registerUser(body);
  }

  @Put('/:userId')
  updateUser(@Body() body: UpdateUserDto): UserResponseDto {
    const res = new UserResponseDto();
    return res;
  }

  @Delete('/:userId')
  deleteUserById() {
    return 'User Deleted';
  }

  @Get('/:userId/balance')
  getUserBalance(): UserBalanceResponseDto {
    const res = new UserBalanceResponseDto();
    return res;
  }

  @Post('/:userId/transfer/:fund/:recipientId')
  transferFunds() {
    return 'Funds transfered';
  }
}
