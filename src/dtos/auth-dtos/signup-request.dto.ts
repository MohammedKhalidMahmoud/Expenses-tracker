import { IsBoolean, IsEmail, IsEnum, IsString, Length, Matches, MinLength } from "class-validator";

export enum UserRole{
    USER= "user",
    ADMIN= "admin"
}
export default class SignupRequestDto{

    @IsString()
    @Length(2,10)
    name!: string

    @IsEmail()
    email!: string

    @IsString()
    @MinLength(5)
    password!: string

    @IsString()
    @MinLength(5)
    @Matches(/^$/, { message: "rePassword must match password" })
    rePassword!: string

    @IsEnum(UserRole)
    role!: string

    @IsBoolean()
    isActive: boolean

}