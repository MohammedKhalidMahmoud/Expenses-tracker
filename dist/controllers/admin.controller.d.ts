import type { Request, Response } from "express";
/**
 *
 * totalUsers	Total registered users
 * activeUsers	Users who added at least one expense recently
 * avgExpensesPerUser	Total expenses ÷ total users
 * newUsersThisMonth	Users registered in the last 30 days
 * subscriptionUsers	Number of paying users (if you have Stripe integration)
 *
 */
export declare function getUsersAnalytics(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 *
 * totalExpenses	Total number of expenses
 * totalAmount	Sum of all expenses
 * avgAmountPerExpense	totalAmount ÷ totalExpenses
 * avgExpensesPerDay	average count of expenses per day
 * avgExpensesPerWeek	average count of expenses per week
 * avgExpensesPerMonth	average count of expenses per month
 * topSpenders (optional)	users who spent the most
 */
export declare function getGlobalCategory(req: Request, res: Response): Promise<void>;
export declare function createGlobalCategory(req: Request, res: Response): Promise<void>;
export declare function updateGlobalCategory(req: Request, res: Response): Promise<void>;
export declare function deleteGlobalCtegory(req: Request, res: Response): Promise<void>;
export declare function getAllUsers(req: Request, res: Response): Promise<Response>;
export declare function getAllExpenses(req: Request, res: Response): Promise<Response>;
export declare function getAllGlobalCategories(req: Request, res: Response): Promise<void>;
export declare function deleteGlobalCategory(): Promise<void>;
//# sourceMappingURL=admin.controller.d.ts.map