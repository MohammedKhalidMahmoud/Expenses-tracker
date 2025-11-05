import type { Request, Response } from "express";
export declare function getExpenses(req: Request, res: Response): Promise<Response>;
export declare function getExpenseById(req: Request, res: Response): Promise<Response>;
export declare const createExpense: (req: Request, res: Response) => Promise<Response>;
export declare const updateExpense: (req: Request, res: Response) => Promise<Response>;
export declare const deleteExpense: (req: Request, res: Response) => Promise<Response>;
//# sourceMappingURL=expense.controller.d.ts.map