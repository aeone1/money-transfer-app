import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  login: string;

  @Column({
    type: 'numeric',
  })
  balance: number;

  @Column({
    unique: true,
    length: 10,
    name: 'card_number',
  })
  cardNumber: string;

  @Column({
    default: false,
    name: 'blacklist',
  })
  isBlacklist: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
