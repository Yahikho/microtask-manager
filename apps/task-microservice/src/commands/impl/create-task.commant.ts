export class CreateTaskCommand{
    constructor(
        public readonly title: string,
        public readonly deadline: Date,
        public readonly status: string,
        public readonly user: string,
        public readonly description?: string,
    ){}
}