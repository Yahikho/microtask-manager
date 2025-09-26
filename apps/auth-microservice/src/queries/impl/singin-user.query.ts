export class SignInUserQuery {
    constructor(
        public readonly email: string,
        public readonly password: string,
    ) { }
}