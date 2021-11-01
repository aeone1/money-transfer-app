import { Module } from '@nestjs/common';
import { UserController } from '../user/user.controller';
import { TransactionController } from '../transaction/transaction.controller';

@Module({
  imports: [],
  controllers: [UserController, TransactionController],
  providers: [],
})
export class AppModule {}
