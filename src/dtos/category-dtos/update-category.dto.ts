import { IsEnum, IsOptional, IsString, IsUUID, Length, MaxLength } from "class-validator"
import { CategoryTypeEnum } from "../../constants.js";

export default class CreateCategoryDto{

    @IsOptional()
    @IsString()
    @Length(2,10)
    name?: string

    @IsOptional()
    @IsString()
    @MaxLength(100)
    description?: string

    @IsOptional()
    @IsEnum(CategoryTypeEnum)
    type?: string

    @IsOptional()
    @IsUUID()
    userId?: string;
}
