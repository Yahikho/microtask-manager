import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserSignUpEvent } from "../impl/user-signup";
import { UserReadRepository } from "../../repository/user-read.repositiry";
import { HttpException } from "@nestjs/common";

@EventsHandler(UserSignUpEvent)
export class UserSignedHandler implements IEventHandler<UserSignUpEvent>{

    constructor(private readonly userReadRepo: UserReadRepository){}

    async handle(event: UserSignUpEvent){
        try{
            await this.userReadRepo.create({ email: event.email, password: event.password })
        }catch(e){
            throw new HttpException(e, 500)
        }
        
    }
}