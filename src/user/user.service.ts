import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Transaction,
  TransactionStatus,
} from 'src/entity/transaction/Transaction';
import { User } from 'src/entity/user/User';
import { Repository } from 'typeorm';
import {
  UserBalanceResponseDto,
  UserTransferBody,
} from './data-transfer-object/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find({ relations: ['transactions'] });
  }

  async getUserById(userId: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(userId, {
        relations: ['transactions'],
      });
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserTransactionsById(userId: string): Promise<Transaction[]> {
    try {
      const user = await this.userRepository.findOneOrFail(userId, {
        relations: ['transactions'],
      });
      return user.transactions;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserBalanceById(userId: string): Promise<UserBalanceResponseDto> {
    try {
      const user = await this.userRepository.findOneOrFail(userId);
      return {
        id: user.id,
        balance: user.balance,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  registerUser(body: User): Promise<User> {
    const newUser = this.userRepository.create(body);
    return this.userRepository.save(newUser);
  }

  async updateUser(body: User): Promise<User> {
    await this.getUserById(body.id);
    return this.userRepository.save(body);
  }

  async deleteUserById(userId: string): Promise<User> {
    const user = await this.getUserById(userId);
    //return this.userRepository.remove(user); //Hard delete
    const dateTime = new Date();
    user.deleted_at = dateTime;
    return this.userRepository.save(user); //Soft delete
  }

  //ToDo Send more informative errors
  async transferFunds(
    userId: string,
    fund: number,
    recipientId: string,
    body: UserTransferBody,
  ): Promise<Transaction> {
    try {
      const sender = await this.getUserById(userId);
      const reciever = await this.getUserById(recipientId);
      fund = +fund;

      //ToDo Type Me :Transaction
      const newTransaction = {
        sender: sender,
        recieverId: reciever.id,
        amount: fund,
        senderComment: body.comment,
      };

      if (+sender.balance > fund) {
        const transaction = await this.transactionRepository.save(
          newTransaction,
        );

        // Probable business logic here (cancelation, wait period etc)
        sender.balance = +sender.balance - fund;
        reciever.balance = +reciever.balance + fund;

        await this.updateUser(sender);
        await this.updateUser(reciever);

        transaction.status = TransactionStatus.SUCCESS;
        return this.transactionRepository.save(transaction);
      } else {
        throw new Error('Insufficient funds');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
