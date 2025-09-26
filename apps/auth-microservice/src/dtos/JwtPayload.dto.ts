export class JwtPayloadDto {
    constructor(
        public readonly userId: number,
        public readonly email: string,
    ) { }
}
