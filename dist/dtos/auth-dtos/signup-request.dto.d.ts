export declare enum UserRole {
    USER = "user",
    ADMIN = "admin"
}
export default class SignupRequestDto {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    role: string;
    isActive: boolean;
}
//# sourceMappingURL=signup-request.dto.d.ts.map