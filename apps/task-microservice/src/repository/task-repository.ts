import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity } from "../entities/task.entity";
import { Repository } from "typeorm";
import { SaveTaskDto } from "../dtos/save-task.dto";

@Injectable()
export class TaskRepository {

    constructor(@InjectRepository(TaskEntity) private readonly taskRepo: Repository<TaskEntity>) { }

    async create(task: SaveTaskDto) {
        try {
            const taskEntity = this.taskRepo.create({
                ...task,
                isActive: true,
                updated_at: new Date(),
            });
            return await this.taskRepo.save(taskEntity)
        } catch (e) {
            throw new HttpException(e.message || 'Error creating task', 500)
        }
    }

    async update(task: SaveTaskDto) {
        try {
            const taskEntity = this.taskRepo.create({
                ...task,
                isActive: true,
                updated_at: new Date(),
            });

        } catch (e) {
            throw new HttpException(e.message || 'Error creating task', 500)
        }
    }

    async get(user: string){
        try{
            return await this.taskRepo.findBy({ user })
        }catch(e){
            throw new HttpException(e.message || 'Error', 500)
        }
    }

    async delete(task: { id: number }) {

    }

}