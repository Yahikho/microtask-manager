import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class UserReadRepository {

    constructor(@InjectRepository(UserEntity) private readonly user: Repository<UserEntity>) { }

    async create(user: { email: string; password: string }) {
        try {
            return await this.user.save(user)
        } catch (e: any) {
            throw new HttpException(e, 500)
        }
    }

    async findByEmail(email: string) {
        return this.user.findOne({ where: { email } })
    }
}