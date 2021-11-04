import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/entity/transaction/Transaction';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  getTransactions(): Promise<Transaction[]> {
    return this.transactionRepository.find({ relations: ['sender'] });
  }

  async getTransactionById(transactionId: string): Promise<Transaction> {
    try {
      const transaction = await this.transactionRepository.findOneOrFail(
        transactionId,
      );
      return transaction;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  createTransaction(body: Transaction): Promise<Transaction> {
    const newTransaction = this.transactionRepository.create(body);
    return this.transactionRepository.save(newTransaction);
  }

  async updateTransaction(body: Transaction): Promise<Transaction> {
    await this.getTransactionById(body.id);
    return this.transactionRepository.save(body);
  }

  async deleteTransactionById(transactionId: string): Promise<Transaction> {
    const transaction = await this.getTransactionById(transactionId);
    //return this.TransactionRepository.remove(user); //Hard delete
    const dateTime = new Date();
    transaction.deleted_at = dateTime;
    return this.transactionRepository.save(transaction); //Soft delete
  }
}
