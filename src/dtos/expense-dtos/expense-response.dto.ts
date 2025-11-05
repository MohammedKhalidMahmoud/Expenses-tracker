import { Type } from "class-transformer";
import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";


export default class ExpenseResponseDto{

    @Type(() => Number)
    @IsNumber()
    amount!: number

    @IsDateString()
    date?: string

    @IsUUID('4', { message: 'categoryId must be a valid UUID v4' })
    categoryId!: string

    @IsOptional()
    @IsString()
    @MaxLength(100)
    description?: string

     @IsDateString()
    createdAt!: string

     @IsDateString()
    updatedAt!: string

}
