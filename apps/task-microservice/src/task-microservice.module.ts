import { Module } from '@nestjs/common';
import { TaskMicroserviceController } from './task-microservice.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { CreateTaskHandler } from './commands/handler/create-task.handler';
import { TaskRepository } from './repository/task-repository';
import { TaskEntity } from './entities/task.entity';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forRoot(process.env.MONGODB_URL || 'mongodb://root:example@localhost:27018', { 
      dbName: process.env.MONGODB_DB_NAME || 'task' 
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT || process.env.DB_PORT || '5434', 10),
      username: process.env.POSTGRES_USER || process.env.DB_USER || 'task_user',
      password: process.env.POSTGRES_PASSWORD || process.env.DB_PASS || 'task_password',
      database: process.env.POSTGRES_DB || process.env.DB_NAME || 'task_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([TaskEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || process.env.SECRET_KEY || 'my_secret_key',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || process.env.EXPIRES_TOKEN_TIME || '60s' }
    })
  ],
  controllers: [TaskMicroserviceController],
  providers: [
    CreateTaskHandler,
    TaskRepository,
  ],
})
export class TaskMicroserviceModule {

}
