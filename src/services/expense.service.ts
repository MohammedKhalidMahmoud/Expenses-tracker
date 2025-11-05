// import Expense from "../DB/models/expense.model.ts";
import ExpenseRepository from "../repositories/expense.repoistory.js";
import AppError from "../utils/app-error.util.js";
import CreateExpenseDto from "../dtos/expense-dtos/create-expense.dto.js";
import UpdateExpenseDto from "../dtos/expense-dtos/update-expense.dto.js";
// import { getCategoryById } from "./category.service";

const expenseRepository = new ExpenseRepository();

export async function deleteExpenseById(id: string) {
  const expense = expenseRepository.findById(id);
  if (!expense)
    throw new AppError(
      "Expense not found",
      404,
      "No expense found with the given ID"
    );
  await expenseRepository.delete(id);
  // await Expense.destroy({ where: { id } });
  return { id };
}

export async function getAllExpenses() {
  const expenses = await expenseRepository.findAll();
  return expenses;
}
export async function getExpenseById(userId: string) {
  return await expenseRepository.findById(userId);
}

export async function getExpenses(userId: string) {
  // retrieve the user's associated expenses
  const expenses = await expenseRepository.findAll();
  // const expenses=await expenseService.getExpenses({
  //   where:{
  //     userId
  //   }
  // });
  return expenses;
}

//done
export async function createExpense(expenseData: CreateExpenseDto) {
  const { amount, date, categoryId, description } = expenseData;
  const newExpense = await expenseRepository.create({
    amount,
    date,
    categoryId,
    description
  }
    
  );
  return newExpense;
}

//done
export async function updateExpense(id: string, updatedData: UpdateExpenseDto) {
  // const expense= await expenseRepository.update(id,)
  const expense = await expenseRepository.findById(id);
  if (!expense)
    throw new AppError(
      "Expense not found",
      404,
      "Ne expense found with the given ID"
    );

  await expenseRepository.update(id, updatedData);
  return await expenseRepository.findById(id);
}


export async function  getExpensesAnalytics(){
  // const = expenseRepository.
}