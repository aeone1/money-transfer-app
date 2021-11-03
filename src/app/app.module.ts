import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../user/user.controller';
import { TransactionController } from '../transaction/transaction.controller';
import config from '../../ormconfig';
import { User } from 'src/entity/user/User';
import { Transaction } from 'src/entity/transaction/Transaction';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Transaction]),
  ],
  controllers: [UserController, TransactionController],
  providers: [UserService],
})
export class AppModule {}
