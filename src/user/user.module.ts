import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';

@Module({
  imports: [],
  providers: [...userProviders, UserService],
  controllers: [UserController],
  exports: [UserModule],
})
export class UserModule {}
