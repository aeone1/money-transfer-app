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
import { TransactionService } from './transaction.service';
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(): Promise<Transaction[]> {
    return this.transactionService.getTransactions();
  }

  @Get('/:transactionId')
  getTransactionById(
    @Param('transactionId') transactionId: string,
  ): Promise<Transaction> {
    return this.transactionService.getTransactionById(transactionId);
  }

  @Post()
  createTransaction(body: Transaction): Promise<Transaction> {
    return this.transactionService.createTransaction(body);
  }

  @Put('/:transactionId')
  updateTransaction(
    @Body() body: Transaction,
    @Param('transactionId') transactionId: string,
  ): Promise<Transaction> {
    body.id = transactionId;
    return this.transactionService.updateTransaction(body);
  }

  @Delete('/:transactionId')
  deleteTransactionById(
    @Param('transactionId') transactionId: string,
  ): Promise<Transaction> {
    return this.transactionService.deleteTransactionById(transactionId);
  }
}
