import BaseRepository from "./base.repository.js";
import Expense from "../DB/models/expense.model.js";
export default class ExpenseRepository extends BaseRepository {
    constructor() {
        super(Expense);
    }
    // Example of a custom query
    async findByUserId(userId) {
        return await this.model.findAll({ where: { userId } });
    }
    async findByCategoryId(categoryId) {
        return await this.model.findAll({ where: { categoryId } });
    }
    async getTotalByUser(userId) {
        const expenses = await this.model.findAll({
            where: { userId },
            attributes: ["amount"],
        });
        return expenses.reduce((sum, e) => sum + Number(e.amount), 0);
    }
}
//# sourceMappingURL=expense.repoistory.js.map