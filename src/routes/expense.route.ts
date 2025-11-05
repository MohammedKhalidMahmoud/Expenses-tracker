import express from "express";
import * as expenseController from "../controllers/expense.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const expenseRouter = express.Router();


expenseRouter
  .route("/")
  .get(authMiddleware, expenseController.getExpenses)
  .post(authMiddleware, expenseController.createExpense);

expenseRouter
  .route("/:id")
  .get(authMiddleware, expenseController.getExpenseById)
  .put(authMiddleware, expenseController.updateExpense)
  .delete(authMiddleware, expenseController.deleteExpense);

export default expenseRouter;