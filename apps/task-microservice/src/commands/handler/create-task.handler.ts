import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateTaskCommand } from "../impl/create-task.commant";
import { TaskRepository } from "../../repository/task-repository";

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {

    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(command: CreateTaskCommand) {
        return await this.taskRepository.create(command)
    }
}