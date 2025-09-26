import { Module } from '@nestjs/common';
import { TaskMicroserviceController } from './task-microservice.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { CreateTaskHandler } from './commands/handler/create-task.handler';
import { TaskRepository } from './repository/task-repository';
import { TaskEntity } from './entities/task.entity';
import { GetTasksHandler } from './queries/handler/get-tasks.handler';

@Module({
  imports: [
    CqrsModule,
    // MongooseModule.forRoot(
    //   process.env.MONGODB_URL ||
    //     `mongodb://${process.env.TASK_MONGO_ROOT_USER}:${process.env.TASK_MONGO_ROOT_PASSWORD}@localhost:27018`,
    //   {
    //     dbName: process.env.TASK_MONGO_DB_NAME || 'task',
    //   },
    // ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.TASK_POSTGRES_PORT || '5434', 10),
      username: process.env.TASK_POSTGRES_USER,
      password: process.env.TASK_POSTGRES_PASSWORD,
      database: process.env.TASK_POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([TaskEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.TASK_JWT_SECRET || 'my_secret_key',
      signOptions: { expiresIn: process.env.TASK_JWT_EXPIRES_IN || '60s' }
    })
  ],
  controllers: [TaskMicroserviceController],
  providers: [
    CreateTaskHandler,
    TaskRepository,
    GetTasksHandler,
  ],
})
export class TaskMicroserviceModule {

}
