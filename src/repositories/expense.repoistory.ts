import BaseRepository from "./base.repository.js";
import Expense from "../DB/models/expense.model.js";

export default class ExpenseRepository extends BaseRepository<typeof Expense.prototype> {
  constructor() {
    super(Expense);
  }

  // Example of a custom query
  async findByUserId(userId: number) {
    return await this.model.findAll({ where: { userId } });
  }

  async findByCategoryId(categoryId: number) {
    return await this.model.findAll({ where: { categoryId } });
  }

  async getTotalByUser(userId: number): Promise<number> {
    const expenses = await this.model.findAll({
      where: { userId },
      attributes: ["amount"],
    });
    return expenses.reduce((sum, e: any) => sum + Number(e.amount), 0);
  }
}


