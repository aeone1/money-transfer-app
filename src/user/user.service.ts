import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user/User';
import { Repository } from 'typeorm';
import { FindUserResponseDto } from './data-transfer-object/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      return user;
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
}
