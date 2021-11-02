import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { createConnection } from 'typeorm';
import { config } from '../ormconfig';

async function bootstrap() {
  const environment = process.env.NODE_ENV || 'development';
  try {
    await createConnection(config[environment]);
    console.log('Connected to DB');
  } catch (error) {
    console.trace(error);
    throw new Error('Could not connect to DB');
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
