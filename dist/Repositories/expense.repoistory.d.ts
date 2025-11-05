import BaseRepository from "./base.repository.js";
import Expense from "../DB/models/expense.model.js";
export default class ExpenseRepository extends BaseRepository<typeof Expense.prototype> {
    constructor();
    findByUserId(userId: number): Promise<import("sequelize").Model<any, any>[]>;
    findByCategoryId(categoryId: number): Promise<import("sequelize").Model<any, any>[]>;
    getTotalByUser(userId: number): Promise<number>;
}
//# sourceMappingURL=expense.repoistory.d.ts.map