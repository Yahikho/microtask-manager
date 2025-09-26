import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetTasksQuery } from "../impl/get-tasks.query";
import { TaskRepository } from "../../repository/task-repository";

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery> {

    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(query: GetTasksQuery) {
        return await this.taskRepository.get(query.user)
    }
}