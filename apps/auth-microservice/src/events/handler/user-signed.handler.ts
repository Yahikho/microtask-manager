import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserSignUpEvent } from "../impl/user-signup";

@EventsHandler(UserSignUpEvent)
export class UserSignedHandler implements IEventHandler<UserSignUpEvent>{

    constructor(){}

    async handle(event: UserSignUpEvent){
        // Este handler solo se ejecuta para mantener la consistencia del Event Sourcing
        // console.log(`User signup event processed for email: ${event.email}`);
    }
}