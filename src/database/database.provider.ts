import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import {
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_HOST,
} from './constants';

export const databaseProvider: FactoryProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async (configService: ConfigService) => {
    const dbName = configService.get(DATABASE_NAME);
    const dbPassword = configService.get(DATABASE_PASSWORD);
    const dbUser = configService.get(DATABASE_USER);
    const dbPort = configService.get(DATABASE_PORT);
    const dbHost = configService.get(DATABASE_HOST);

    const datasource = new DataSource({
      type: 'mysql',
      host: dbHost,
      port: dbPort,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
    });

    return datasource.initialize();
  },

  inject: [ConfigService],
};
