import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export enum TransactionStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELED = 'canceled',
}

@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'sender_id',
  })
  senderId: string;

  @Column({
    name: 'reciever_id',
  })
  recieverId: string;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
  })
  status: string;

  @Column({
    type: 'money',
  })
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
