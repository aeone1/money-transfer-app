import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  CreateUserDto,
  FindUserResponseDto,
  UpdateUserDto,
  UserResponseDto,
  UserBalanceResponseDto,
} from './data-transfer-object/user.dto';

@Controller('user')
export class UserController {
  @Get()
  getUsers(): FindUserResponseDto[] {
    const res = new FindUserResponseDto();
    return [res];
  }

  @Get('/:userId')
  getUser(): FindUserResponseDto {
    const res = new FindUserResponseDto();
    return res;
  }

  @Post()
  registerUser(@Body() body: CreateUserDto): UserResponseDto {
    const res = new UserResponseDto();
    return res;
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
