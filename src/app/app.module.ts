import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../user/user.controller';
import { TransactionController } from '../transaction/transaction.controller';
import config from '../../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [UserController, TransactionController],
  providers: [],
})
export class AppModule {}
