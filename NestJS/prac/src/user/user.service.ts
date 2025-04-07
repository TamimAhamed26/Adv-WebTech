import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // Users array of objects with 'name' and 'email' properties
  private users: { name: string, email: string }[] = []; // Array to hold user data

  // Method to get all users
  getUsers() {
    return this.users;
  }


  addUser(name: string, email: string) {
    const newUser = { name, email };
    this.users.push(newUser);  
    return newUser;
  }
}
