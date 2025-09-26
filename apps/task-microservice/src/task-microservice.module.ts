import { Module } from '@nestjs/common';
import { TaskMicroserviceController } from './task-microservice.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forRoot('mongodb://root:example@localhost:27018', { dbName: 'task' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5434', 10),
      username: process.env.DB_USER || 'task_user',
      password: process.env.DB_PASS || 'task_password',
      database: process.env.DB_NAME || 'task_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY || 'my_secret_key',
      signOptions: { expiresIn: process.env.EXPIRES_TOKEN_TIME || '60s' }
    })
  ],
  controllers: [TaskMicroserviceController],
  providers: [],
})
export class TaskMicroserviceModule {

}
