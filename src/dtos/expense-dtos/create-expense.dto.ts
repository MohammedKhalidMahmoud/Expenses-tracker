import { IsDateString, IsNumber, IsString, IsUUID, MaxLength } from "class-validator";
import { Type } from "class-transformer";

export default class CreateExpenseDto{

    @Type(() => Number)
    @IsNumber()
    amount!: number

    @IsDateString()
    date?: string

    @IsUUID('4', { message: 'categoryId must be a valid UUID v4' })
    categoryId!: string

    @IsString()
    @MaxLength(100)
    description?: string

}
