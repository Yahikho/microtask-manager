import { DataSource } from 'typeorm';

const DB_HOST = process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost';
const DB_PORT = parseInt(process.env.TASK_POSTGRES_PORT || (DB_HOST === 'localhost' ? '5434' : '5432'), 10);
const DB_USER = process.env.TASK_POSTGRES_USER;
const DB_PASS = process.env.TASK_POSTGRES_PASSWORD;
const DB_NAME = process.env.TASK_POSTGRES_DB;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [__dirname + '/src/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});
