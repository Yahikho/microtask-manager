import { DataSource } from 'typeorm';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = parseInt(process.env.DB_PORT || (DB_HOST === 'localhost' ? '5433' : '5432'), 10);
const DB_USER = process.env.DB_USER || 'auth_user';
const DB_PASS = process.env.DB_PASS || 'auth_password';
const DB_NAME = process.env.DB_NAME || 'auth_db';

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
