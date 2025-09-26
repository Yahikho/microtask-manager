import { Controller, Post, Body } from '@nestjs/common';
import { UserSignUpDto } from './dtos/UserSignUp.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SignUpUserCommand } from './commands/impl/signup-user.command';
import { UserSignIn } from './dtos/UserSignIn.dto';
import { SignInUserQuery } from './queries/impl/singin-user.query';

@Controller()
export class AuthMicroserviceController {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) { }

  @Post('signup')
  async signUp(@Body() userSignUpDto: UserSignUpDto) {
    const result = await this.commandBus.execute(
      new SignUpUserCommand(userSignUpDto.email, userSignUpDto.password)
    )
    return result
  }

  @Post('signin')
  async signIn(@Body() userSignIn: UserSignIn) {
    const result = await this.queryBus.execute(
      new SignInUserQuery(userSignIn.email, userSignIn.password)
    )

    return result
  }
}
