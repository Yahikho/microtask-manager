import { NestFactory } from '@nestjs/core';
import { TaskMicroserviceModule } from './task-microservice.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(TaskMicroserviceModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    transformOptions: { enableImplicitConversion: true }
  }));

  app.setGlobalPrefix('api-task/');
  await app.listen(process.env.TASK_SERVICE_PORT ?? 3004);
}
bootstrap();
