import { DataSource } from 'typeorm';

const DB_HOST = process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost';
const DB_PORT = parseInt(process.env.POSTGRES_PORT || process.env.DB_PORT || (DB_HOST === 'localhost' ? '5434' : '5432'), 10);
const DB_USER = process.env.POSTGRES_USER || process.env.DB_USER || 'task_user';
const DB_PASS = process.env.POSTGRES_PASSWORD || process.env.DB_PASS || 'task_password';
const DB_NAME = process.env.POSTGRES_DB || process.env.DB_NAME || 'task_db';

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
