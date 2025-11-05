import { IsEmail, MinLength } from "class-validator"

export default class LoginRequestDto{
    @IsEmail()
    email!: string;

    @MinLength(5)
    password!: string;
}