// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // CREATE
  async createUser(name: string, email: string, password: string) {
    const user = this.userRepository.create({ name, email, password });
    return await this.userRepository.save(user);
  }

  // READ (all)
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  // READ (one)
  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // UPDATE
  async updateUser(id: number, updateData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updateData);
    return this.getUserById(id);
  }

  // DELETE
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
