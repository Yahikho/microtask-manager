import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserSignUpDto } from './dtos/UserSignUp.dto';
import { CommandBus } from '@nestjs/cqrs';
import { SignUpUserCommand } from './commands/impl/signup-user.command';

@Controller()
export class AuthMicroserviceController {

  constructor(private readonly commandBus: CommandBus) { }

  @Post('signup')
  async signUp(@Body() userSignUpDto: UserSignUpDto) {
    const result = await this.commandBus.execute(
      new SignUpUserCommand(userSignUpDto.email, userSignUpDto.password)
    )
    return result
  }
}
