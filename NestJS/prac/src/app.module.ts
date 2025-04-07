import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',          // DB IP
      port: 5432,                 // Default PostgreSQL port
      username: 'postgres',       // DB username
      password: 'root',           // DB password
      database: 'First',          // DB name
      autoLoadEntities: true,     // Automatically load entities
      synchronize: true,          // Auto-creates tables (disable in production)
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
