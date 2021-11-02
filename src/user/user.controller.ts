import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  CreateUserDto,
  FindUserResponseDto,
  UpdateUserDto,
  UserResponseDto,
} from './data-transfer-object/user.dto';

@Controller('user')
export class UserController {
  @Get()
  getUsers(): FindUserResponseDto[] {
    return 'Get All Users';
  }

  @Get('/:userId')
  getUser(): FindUserResponseDto {
    return 'Get User By Id';
  }

  @Post()
  registerUser(@Body() body: CreateUserDto): UserResponseDto {
    return 'User registered';
  }

  @Put('/:userId')
  updateUser(@Body() body: UpdateUserDto): UserResponseDto {
    return 'Updated User';
  }

  @Delete('/:userId')
  deleteUserById() {
    return 'User Deleted';
  }

  @Get('/:userId/balance')
  getUserBalance() {
    return 'User Account Balance';
  }

  @Post('/:userId/transfer/:fund/:recipientId')
  transferFunds() {
    return 'Funds transfered';
  }
}
