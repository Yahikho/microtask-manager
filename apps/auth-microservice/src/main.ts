import { NestFactory } from '@nestjs/core';
import { AuthMicroserviceModule } from './auth-microservice.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthMicroserviceModule);
  app.useGlobalPipes(new ValidationPipe());
  
  app.setGlobalPrefix('api-auth/');
  await app.listen(process.env.AUTH_SERVICE_PORT ?? 3003);
}
bootstrap();
