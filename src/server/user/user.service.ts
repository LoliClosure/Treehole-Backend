import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entity/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: User): Promise<User> { // 功能：创建用户
    return this.usersRepository.save(user);
    }

  update(user: User): Promise<User> { // 功能：更新用户
    return this.usersRepository.save(user);
    }

  findAll(): Promise<User[]> {  // 功能：查找所有用户
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> { // 功能：查找一个用户
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> { // 功能：删除用户
    await this.usersRepository.delete(id);
  }
}