import { NestFactory } from '@nestjs/core';
import { TaskMicroserviceModule } from './task-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskMicroserviceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
