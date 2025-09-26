import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { SignUpUserCommand } from '../impl/signup-user.command';
import { EventStoreRepository } from '../../repository/evet-store.repository';
import { UserSignUpEvent } from '../../events/impl/user-signup';
import { PasswordService } from '../../services/password.service';
import { UserReadRepository } from '../../repository/user-read.repositiry';
import { CreateJWTService } from '../../services/create-jwt.service';
import { JwtPayloadDto } from '../../dtos/JwtPayload.dto';
import { ConflictException } from '@nestjs/common';

@CommandHandler(SignUpUserCommand)
export class SignUpUserHandler implements ICommandHandler<SignUpUserCommand> {

    constructor(
        private readonly eventBus: EventBus,
        private readonly eventStoreRepository: EventStoreRepository,
        private readonly passwordService: PasswordService,
        private readonly userReadRepo: UserReadRepository,
        private readonly createJWTService: CreateJWTService,
    ) { }

    async execute(command: SignUpUserCommand) {
        const hashed = await this.passwordService.hash(command.password)

        const emailExist = await this.userReadRepo.findByEmail(command.email)

        if(emailExist) throw new ConflictException('Email already use')

        const event = new UserSignUpEvent(
            command.email,
            hashed,
        )

        await this.eventStoreRepository.save(event)
        this.eventBus.publish(event)

        const user = await this.userReadRepo.create({ 
            email: command.email, 
            password: hashed 
        })

        const jwtPayload = new JwtPayloadDto(user.id, user.email)
        const token = this.createJWTService.signToken(jwtPayload)
        
        return { 
            user: { 
                id: user.id,
                email: user.email 
            },
            ...token 
        }

    }

}