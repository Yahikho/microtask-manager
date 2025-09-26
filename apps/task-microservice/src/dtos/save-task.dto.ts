import { TaskState } from "../entities/task.entity";

export class SaveTaskDto{
    constructor(
        public readonly title: string,
        public readonly deadline: Date,
        public readonly status: TaskState,
        public readonly user: string,
        public readonly description?: string,
    ){}
}