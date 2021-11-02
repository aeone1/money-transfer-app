import { Body, Controller, Delete, Get, Put } from '@nestjs/common';
import {
  UpdateTransactionDto,
  FindTransactionResponseDto,
  TransactionResponseDto,
} from './data-transfer-object/transaction.dto';

@Controller('transaction')
export class TransactionController {
  @Get()
  getTransactions(): FindTransactionResponseDto[] {
    return 'Get All Transactions';
  }

  @Get('/:transactionId')
  getTransactionById(): FindTransactionResponseDto {
    return 'Get A Transaction By its Id';
  }

  @Put('/:transactionId')
  updateTransaction(@Body() body: UpdateTransactionDto): TransactionResponseDto {
    return 'Transaction Updated';
  }

  @Delete('/:transactionId')
  deleteTransaction() {
    return 'Transaction Deleted';
  }
}
