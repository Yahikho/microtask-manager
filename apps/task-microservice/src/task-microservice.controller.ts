import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserInputDto } from './dtos/user-input.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from './commands/impl/create-task.commant';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class TaskMicroserviceController {
  
  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Request() req,  @Body() userInputDto: UserInputDto){
    const user = req.user.email
    const deadline = new Date(userInputDto.deadline)
    const result = await this.commandBus.execute(
      new CreateTaskCommand(
        userInputDto.title,
        deadline,
        userInputDto.status,
        user,
        userInputDto.description
      )
    )

    return result
  }
}
