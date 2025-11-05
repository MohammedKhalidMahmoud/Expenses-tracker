import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Type } from "class-transformer";

export default class UpdateExpenseDto{

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    amount?: number

    @IsOptional()
    @IsDateString()
    date?: string

    @IsOptional()
    @IsUUID('4', { message: 'categoryId must be a valid UUID v4' })
    categoryId?: string

    @IsOptional()
    @IsString()
    @MaxLength(100)
    description?: string

}
