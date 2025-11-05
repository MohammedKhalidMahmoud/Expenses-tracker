import { IsEnum, IsString, IsUUID, Length, MaxLength } from "class-validator"
import { CategoryTypeEnum } from "../../constants.js";

export default class CategoryReponseDto{

    @IsString()
    @Length(2,10)
    name!: string

    @IsString()
    @MaxLength(100)
    description?: string

    @IsEnum(CategoryTypeEnum)
    type!: string

    @IsUUID()
    userId?: string;
}
