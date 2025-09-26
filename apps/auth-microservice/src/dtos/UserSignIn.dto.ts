import { IsEmail, IsNotEmpty } from "class-validator";

export class UserSignIn {
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}