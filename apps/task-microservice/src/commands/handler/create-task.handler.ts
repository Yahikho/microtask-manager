import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateTaskCommand } from "../impl/create-task.commant";

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {

    constructor(
        private readonly eventBus: EventBus,
    ) { }

    async execute(command: CreateTaskCommand) {
        
    }
}