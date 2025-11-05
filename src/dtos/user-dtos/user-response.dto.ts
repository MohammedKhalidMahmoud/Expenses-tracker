import { IsBoolean, IsDateString, IsEmail, IsEnum, IsString, Length, Matches, MinLength } from "class-validator";
import { UserRole } from '../../constants.js';

export default class UserResponseDto{

    @IsString()
    @Length(2,10)
    name!: string
    
    @IsEmail()
    email!: string
    
    
    @IsEnum(UserRole)
    role!: string
    
    @IsBoolean()
    isActive!: boolean

    @IsDateString()
    createdAt!: string

    @IsDateString()
    updatedAt!: string
}