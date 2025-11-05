import { IsBoolean, IsEmail, IsEnum, IsString, Length, Matches, MinLength, IsOptional } from "class-validator";
import { UserRole } from '../../constants.js';

export default class UpdateUserDto{

    @IsOptional()
    @IsString()
    @Length(2,10)
    name?: string
    
    @IsOptional()
    @IsEmail()
    email?: string
    
    @IsOptional()
    @IsString()
    @MinLength(5)
    password?: string
    
    @IsOptional()
    @IsString()
    @MinLength(5)
    @Matches(/^$/, { message: "rePassword must match password" })
    rePassword?: string
    
    @IsOptional()
    @IsEnum(UserRole)
    role?: string
    
    @IsOptional()
    @IsBoolean()
    isActive?: boolean
}