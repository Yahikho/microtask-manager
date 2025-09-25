import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserSignUpDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 32)
    password: string;
}