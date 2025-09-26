import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPayloadDto } from "../dtos/JwtPayload.dto";

@Injectable()
export class CreateJWTService {

    constructor(private readonly jwtService: JwtService) { }

    signToken(payload: JwtPayloadDto): { access_token: string } {
        const tokenPayload = {
            sub: payload.userId,
            email: payload.email,
        };

        return {
            access_token: this.jwtService.sign(tokenPayload)
        };
    }
}