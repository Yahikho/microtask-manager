import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { SignInUserQuery } from "../impl/singin-user.query";
import { UserReadRepository } from "../../repository/user-read.repositiry";
import { PasswordService } from "../../services/password.service";
import { CreateJWTService } from "../../services/create-jwt.service";
import { JwtPayloadDto } from "../../dtos/JwtPayload.dto";
import { UnauthorizedException } from "@nestjs/common";

@QueryHandler(SignInUserQuery)
export class SignInHandler implements IQueryHandler<SignInUserQuery> {

    constructor(
        private readonly userReadRepository: UserReadRepository,
        private readonly passwordService: PasswordService,
        private readonly createJWTService: CreateJWTService,
    ) { }

    async execute(query: SignInUserQuery) {
        const user = await this.userReadRepository.findByEmail(query.email)

        if(!user || !await this.passwordService.compare(query.password, user!.password)){
            throw new UnauthorizedException()
        }

        const jwtPayload = new JwtPayloadDto(
            user.id,
            user.email
        );

        const token = this.createJWTService.signToken(jwtPayload);

        return {
            user: {
                id: user.id,
                email: user.email
            },
            ...token
        };
    }
}