import type { Request, Response } from "express";
import { userService, expenseService, categoryService} from "../services/index.js";
import {successResponse} from "../utils/resposne.util.js";
//analytics

/**
 * 
 * totalUsers	Total registered users
 * activeUsers	Users who added at least one expense recently
 * avgExpensesPerUser	Total expenses ÷ total users
 * newUsersThisMonth	Users registered in the last 30 days
 * subscriptionUsers	Number of paying users (if you have Stripe integration)
 *  
 */
export async function getUsersAnalytics(req:Request, res:Response){
    const userAnalyticsData= await userService.getUsersAnalytics();
    return successResponse(res, "User Analytics done", userAnalyticsData, 200);
}

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
// export async function getExpensesAnalytics(req:Request, res:Response){
//     const expenseAnalyticsData= await expenseService.getExpensesAnalytics();
//     return successResponse(res, "Expenses Analytics done", expenseAnalyticsData, 200);

// }
// export async function getCategoriesAnalytics(req:Request, res:Response){
//     const categoryAnalyticsData= await categoryService.getCategoriesAnalytics();
//     return successResponse(res, "Category Analytics done", categoryAnalyticsData, 200);
// }


//crud  operations for global category

export async function getGlobalCategory(req:Request, res:Response){

}

export async function createGlobalCategory(req: Request, res:Response){

}

export async function updateGlobalCategory(req:Request, res:Response){

}

export async function deleteGlobalCtegory(req:Request, res:Response){

}

//

export async function getAllUsers(req: Request, res: Response): Promise<Response>{
    const users = await userService.getUsers();
    return successResponse(res, "Users retrieved successfully", users, 200);
}

export async function getAllExpenses(req: Request, res: Response) : Promise<Response>{ // done
    const expenses= await expenseService.getAllExpenses();
    return successResponse(res, "Expenses retrieved successfully", expenses, 200)
}

export async function getAllGlobalCategories(req:Request, res:Response){

}

export async function deleteGlobalCategory(){

}