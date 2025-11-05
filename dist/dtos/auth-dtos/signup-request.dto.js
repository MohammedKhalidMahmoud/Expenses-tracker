var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsEmail, IsEnum, IsString, Length, Matches, MinLength } from "class-validator";
export var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["ADMIN"] = "admin";
})(UserRole || (UserRole = {}));
export default class SignupRequestDto {
    name;
    email;
    password;
    rePassword;
    role;
    isActive;
}
__decorate([
    IsString(),
    Length(2, 10),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "name", void 0);
__decorate([
    IsEmail(),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "email", void 0);
__decorate([
    IsString(),
    MinLength(5),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "password", void 0);
__decorate([
    IsString(),
    MinLength(5),
    Matches(/^$/, { message: "rePassword must match password" }),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "rePassword", void 0);
__decorate([
    IsEnum(UserRole),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "role", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Boolean)
], SignupRequestDto.prototype, "isActive", void 0);
//# sourceMappingURL=signup-request.dto.js.map