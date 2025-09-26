import { IsDate, IsEnum, IsOptional, IsString, MinLength } from "class-validator"
import { TaskState } from "../entities/task.entity"

export class UserInputDto{
    @IsString()
    @MinLength(3)
    title: string

    @IsOptional()
    @IsString()
    description?: string

    @IsDate()
    deadline: Date

    @IsEnum(TaskState)
    status: TaskState
}