import { Module } from '@nestjs/common';
import { AuthMicroserviceController } from './auth-microservice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { SignUpUserHandler } from './commands/handler/signup-user.handler';
import { UserSignedHandler } from './events/handler/user-signed.handler';
import { EventStoreRepository } from './repository/evet-store.repository';
import { UserReadRepository } from './repository/user-read.repositiry';
import { EventSchema } from './schemas/event.schema';
import { PasswordService } from './services/password.service';
import { CreateJWTService } from './services/create-jwt.service';
import { SignInHandler } from './queries/handler/signin-user.handler';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URL ||
      `mongodb://${process.env.AUTH_MONGO_ROOT_USER}:${process.env.AUTH_MONGO_ROOT_PASSWORD}@localhost:27017`,
      {
        dbName: process.env.AUTH_MONGO_DB_NAME || 'auth',
      },
    ),
    MongooseModule.forFeature([{
      name: 'Event',
      schema: EventSchema
    }]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.AUTH_POSTGRES_PORT || '5433', 10),
      username: process.env.AUTH_POSTGRES_USER,
      password: process.env.AUTH_POSTGRES_PASSWORD,
      database: process.env.AUTH_POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.AUTH_JWT_SECRET || 'my_secret_key',
      signOptions: { expiresIn: process.env.AUTH_JWT_EXPIRES_IN || '60s' }
    })
  ],
  controllers: [AuthMicroserviceController],
  providers: [
    SignUpUserHandler,
    UserSignedHandler,
    EventStoreRepository,
    UserReadRepository,
    PasswordService,
    CreateJWTService,
    SignInHandler
  ],
})
export class AuthMicroserviceModule { }
