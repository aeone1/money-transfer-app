import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/User';

export enum TransactionStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELED = 'canceled',
  PENDING = 'pending',
}

@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({
    name: 'sender_id',
  })
  sender: User;

  @Column({
    name: 'reciever_id',
  })
  recieverId: string;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.PENDING,
  })
  status: string;

  @Column({
    type: 'money',
  })
  amount: number;

  @Column({
    name: 'sender_comment',
    nullable: true,
  })
  senderComment: string;

  @Column({
    name: 'internal_comment',
    nullable: true,
  })
  internalComment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
