import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DEV_ENV_PATH } from './constants';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: DEV_ENV_PATH,
      isGlobal: true,
    }),
    UserModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
