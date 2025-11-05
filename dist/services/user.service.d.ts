import CreateUserDto from "../dtos/user-dtos/create-user.dto.js";
export declare function createUser(body: CreateUserDto): Promise<import("sequelize").Model<any, any>>;
export declare function getUsers(page?: number, limit?: number): Promise<import("sequelize").Model<any, any>[]>;
export declare function getUserById(id: string): Promise<import("sequelize").Model<any, any> | null>;
export declare function getUserByEmail(email: string): Promise<import("sequelize").Model<any, any> | null>;
export declare function deleteUserById(id: string): Promise<{
    id: any;
}>;
export declare function modifyUser(id: string, updateData: object): Promise<import("sequelize").Model<any, any> | null>;
export declare function deactivateUser(id: string): Promise<import("sequelize").Model<any, any> | null>;
export declare function updatePassword(id: string, password1: string, newPassword: string): Promise<import("sequelize").Model<any, any>>;
export declare function getUsersAnalytics(): Promise<{
    totalUsersCount: number;
    activeUsersCount: void;
    avgExpensesPerUser: void;
    newUsersThisMonth: void;
    subscripedUsersCount: void;
}>;
//# sourceMappingURL=user.service.d.ts.map