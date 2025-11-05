
// import Expense from "../Models/Expense.model.js";

import * as expenseService from "../services/expense.service.js";
import * as userService from "../services/user.service.js";
import { successResponse } from "../utils/resposne.util.js";
import AppError from "../utils/app-error.util.js";
import type { Request, Response } from "express";
// import Expense from '../DB/models/expense.model.ts';



export async function getExpenses(req: Request, res: Response) : Promise<Response>{ // retrieve the expenses associated with a certain user
  const {id: userId, role}= req.user!;
  const user= userService.getUserById(userId);
  if(role=== 'admin') 
    throw new AppError("Error retrieving expenses" , 400, "admins do not have associated expenses")
    const expenses= await expenseService.getExpenses(userId);
    return successResponse(res, "Associated Expenses Retrieved successfully", expenses, 200);
  
}

export async function getExpenseById(req: Request, res: Response): Promise<Response> {
  
    const expenses = await expenseService.getAllExpenses();
    console.log("Fetched all expenses successfully");
    return successResponse(res, "Expenses retrieved successfully", expenses, 200)
    
}


export const createExpense = async (req: Request, res: Response): Promise<Response> => {
  
    const user = req.user!;
    const newExpense= await expenseService.createExpense({...req.body, userId: user.id})
    return successResponse(res, "Expense created successfully", newExpense, 201 )
 
};

// Update expense
export const updateExpense = async (req: Request, res: Response): Promise<Response> => {
 
    const {user} = req;
    const {updatedData}= req.body;
    const updatedExpense= expenseService.updateExpense(user!.id, updatedData )
    if (!updatedExpense) {
      throw new AppError("Expense not found", 404, "Expense not found or not owned by user")
    }
    
    return successResponse(res, "Expense updated successfully.", updatedExpense, 201);
  
};

// Delete expense
export const deleteExpense = async (req: Request, res: Response): Promise<Response> => {
  
  if(!req.params.id) throw new AppError("Bad Request", 400, "missing Id in the params")
  const deleted = await expenseService.deleteExpenseById(req.params.id);

  if (!deleted) 
    throw new AppError("Expense not found", 404, "Expense not found or not owned by user")
    
  return successResponse(res, "Expense deleted successfully", deleted, 200);
  
}

// Error handler utility


// export async function getDailyExpenses(req, res) {
//    try {
//         // const requestedDate = parseDateParam(req.query.date, new Date());
//         // const startOfDay = new Date(requestedDate);
//         const startOfDay = new Date();
//         startOfDay.setHours(0, 0, 0, 0);
        
//         const endOfDay = new Date(startOfDay);
//         endOfDay.setDate(startOfDay.getDate() + 1);
        
//         const expenses = await Expense.findAll({
//             date: {
//                 $gte: startOfDay,
//                 $lt: endOfDay
//             }
//         });
        
//         res.json(expenses);
//     } catch (err) {
//         const error = new AppError(err.message || 'Server error', err.statusCode, err.status);
//         throw error;
//     }
// }