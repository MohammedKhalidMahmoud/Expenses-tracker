var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEnum, IsString, IsUUID, Length, MaxLength } from "class-validator";
import { CategoryTypeEnum } from "../../constants.js";
export default class CategoryReponseDto {
    name;
    description;
    type;
    userId;
}
__decorate([
    IsString(),
    Length(2, 10),
    __metadata("design:type", String)
], CategoryReponseDto.prototype, "name", void 0);
__decorate([
    IsString(),
    MaxLength(100),
    __metadata("design:type", String)
], CategoryReponseDto.prototype, "description", void 0);
__decorate([
    IsEnum(CategoryTypeEnum),
    __metadata("design:type", String)
], CategoryReponseDto.prototype, "type", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CategoryReponseDto.prototype, "userId", void 0);
//# sourceMappingURL=category-response.dto.js.map