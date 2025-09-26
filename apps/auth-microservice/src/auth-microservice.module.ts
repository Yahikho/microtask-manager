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
    MongooseModule.forRoot('mongodb://root:example@localhost:27017', { dbName: 'auth' }),
    MongooseModule.forFeature([{
      name: 'Event',
      schema: EventSchema
    }]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5433', 10),
      username: process.env.DB_USER || 'auth_user',
      password: process.env.DB_PASS || 'auth_password',
      database: process.env.DB_NAME || 'auth_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY || 'my_secret_key',
      signOptions: { expiresIn: process.env.EXPIRES_TOKEN_TIME || '60s' }
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
