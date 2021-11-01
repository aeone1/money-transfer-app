import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return 'Get All Users';
  }

  @Get('/:userId')
  getUser() {
    return 'Get User By Id';
  }

  @Post()
  registerUser() {
    return 'User registered';
  }

  @Put('/:userId')
  updateUser() {
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
