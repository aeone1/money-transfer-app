import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('transaction')
export class TransactionController {
  @Get()
  getTransactions() {
    return 'Get All Transactions';
  }

  @Get('/:transactionId')
  getTransactionById() {
    return 'Get A Transaction By its Id';
  }

  @Put('/:transactionId')
  updateTransaction() {
    return 'Transaction Updated';
  }

  @Delete('/:transactionId')
  deleteTransaction() {
    return 'Transaction Deleted';
  }
}
