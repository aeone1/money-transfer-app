import 'dotenv/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  logger: 'file',
  entities: ['dist/src/entity/**/*.ts'],
  migrations: ['dist/src/migration/**/*.ts'],
  subscribers: ['dist/src/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

export default config;
