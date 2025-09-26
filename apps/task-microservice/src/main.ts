import { NestFactory } from '@nestjs/core';
import { TaskMicroserviceModule } from './task-microservice.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(TaskMicroserviceModule);
  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api-task/');
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
