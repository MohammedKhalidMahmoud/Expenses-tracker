var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Type } from "class-transformer";
import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
export default class ExpenseResponseDto {
    amount;
    date;
    categoryId;
    description;
    createdAt;
    updatedAt;
}
__decorate([
    Type(() => Number),
    IsNumber(),
    __metadata("design:type", Number)
], ExpenseResponseDto.prototype, "amount", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "date", void 0);
__decorate([
    IsUUID('4', { message: 'categoryId must be a valid UUID v4' }),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "categoryId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(100),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "description", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "createdAt", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=expense-response.dto.js.map