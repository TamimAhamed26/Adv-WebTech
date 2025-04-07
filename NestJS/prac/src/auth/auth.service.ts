import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string): string {
    // Basic logic; DB integration will be added later
    if (email === 'test@example.com' && password === 'password123') {
      return 'Login successful!';
    }
    return 'Invalid credentials';
  }
}
