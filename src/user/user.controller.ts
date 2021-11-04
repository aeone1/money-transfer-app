import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Transaction } from 'src/entity/transaction/Transaction';
import { User } from 'src/entity/user/User';
import {
  UserBalanceResponseDto,
  UserTransferBody,
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

  @Get('/:userId/transactions')
  getUserTransactionsById(
    @Param('userId') userId: string,
  ): Promise<Transaction[]> {
    return this.userService.getUserTransactionsById(userId);
  }

  @Post()
  registerUser(@Body() body: User): Promise<User> {
    return this.userService.registerUser(body);
  }

  @Put('/:userId')
  updateUser(
    @Body() body: User,
    @Param('userId') userId: string,
  ): Promise<User> {
    body.id = userId;
    return this.userService.updateUser(body);
  }

  @Delete('/:userId')
  deleteUserById(@Param('userId') userId: string): Promise<User> {
    return this.userService.deleteUserById(userId);
  }

  @Get('/:userId/balance')
  getUserBalanceById(
    @Param('userId') userId: string,
  ): Promise<UserBalanceResponseDto> {
    return this.userService.getUserBalanceById(userId);
  }

  @Post('/:userId/transfer/:fund/:recipientId')
  transferFunds(
    @Param('userId') userId: string,
    @Param('fund') fund: number,
    @Param('recipientId') recipientId: string,
    @Body() body: UserTransferBody,
  ): Promise<Transaction> {
    return this.userService.transferFunds(userId, fund, recipientId, body);
  }
}
