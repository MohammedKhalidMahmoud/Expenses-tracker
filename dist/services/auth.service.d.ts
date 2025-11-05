import CreateUserDto from "../dtos/user-dtos/create-user.dto.js";
export declare function login(email: string, password: string): Promise<{
    user: import("sequelize").Model<any, any>;
    accessToken: string;
    refreshToken: string;
}>;
export declare function signup(body: CreateUserDto): Promise<import("sequelize").Model<any, any>>;
export declare function refreshToken(refreshToken: string): Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare function forgetPassword(email: string): Promise<void>;
export declare function resetPassword(newPassword: string, rePassword: string): Promise<void>;
//# sourceMappingURL=auth.service.d.ts.map