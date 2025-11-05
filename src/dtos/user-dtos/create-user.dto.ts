import { IsBoolean, IsEmail, IsEnum, IsString, Length, Matches, MinLength } from "class-validator";
import { UserRole } from '../../constants.js';

export default class CreateUserDto{

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
    isActive?: boolean

    @IsBoolean()
    emailVerified: boolean

    @IsString()
    subscriptionId: string
}