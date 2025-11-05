var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Type } from "class-transformer";
export default class UpdateExpenseDto {
    amount;
    date;
    categoryId;
    description;
}
__decorate([
    IsOptional(),
    Type(() => Number),
    IsNumber(),
    __metadata("design:type", Number)
], UpdateExpenseDto.prototype, "amount", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "date", void 0);
__decorate([
    IsOptional(),
    IsUUID('4', { message: 'categoryId must be a valid UUID v4' }),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "categoryId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(100),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "description", void 0);
//# sourceMappingURL=update-expense.dto.js.map