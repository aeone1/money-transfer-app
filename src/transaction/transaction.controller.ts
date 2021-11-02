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
    const res = new FindTransactionResponseDto();
    return [res];
  }

  @Get('/:transactionId')
  getTransactionById(): FindTransactionResponseDto {
    const res = new FindTransactionResponseDto();
    return res;
  }

  @Put('/:transactionId')
  updateTransaction(
    @Body() body: UpdateTransactionDto,
  ): TransactionResponseDto {
    const res = new TransactionResponseDto();
    return res;
  }

  @Delete('/:transactionId')
  deleteTransaction() {
    return 'Transaction Deleted';
  }
}
