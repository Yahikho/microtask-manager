import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserInputDto } from './dtos/user-input.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from './commands/impl/create-task.commant';
import { AuthGuard } from './guards/auth.guard';
import { GetTasksQuery } from './queries/impl/get-tasks.query';

@Controller()
export class TaskMicroserviceController {
  
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
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

  @UseGuards(AuthGuard)
  @Get('get')
  async get(@Request() req) {
    const user = req.user.email
    return await this.queryBus.execute(
      new GetTasksQuery(user)
    )
  }
}
