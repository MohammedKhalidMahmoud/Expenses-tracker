import CreateExpenseDto from "../dtos/expense-dtos/create-expense.dto.js";
import UpdateExpenseDto from "../dtos/expense-dtos/update-expense.dto.js";
export declare function deleteExpenseById(id: string): Promise<{
    id: string;
}>;
export declare function getAllExpenses(): Promise<import("sequelize").Model<any, any>[]>;
export declare function getExpenseById(userId: string): Promise<import("sequelize").Model<any, any> | null>;
export declare function getExpenses(userId: string): Promise<import("sequelize").Model<any, any>[]>;
export declare function createExpense(expenseData: CreateExpenseDto): Promise<import("sequelize").Model<any, any>>;
export declare function updateExpense(id: string, updatedData: UpdateExpenseDto): Promise<import("sequelize").Model<any, any> | null>;
export declare function getExpensesAnalytics(): Promise<void>;
//# sourceMappingURL=expense.service.d.ts.map