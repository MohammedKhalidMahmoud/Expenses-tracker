import BaseRepository from "./base.repository.js";
import User from "../DB/models/user.model.js";
export default class UserRepository extends BaseRepository<typeof User.prototype> {
    constructor();
    findByEmail(email: string, excluded: string[]): Promise<import("sequelize").Model<any, any> | null>;
    getActiveUsersCount(): Promise<void>;
    getAvgExpensesPerUser(): Promise<void>;
    getNewUsersThisMonthCount(): Promise<void>;
    getSubscripedUsersCount(): Promise<void>;
}
//# sourceMappingURL=user.repository.d.ts.map