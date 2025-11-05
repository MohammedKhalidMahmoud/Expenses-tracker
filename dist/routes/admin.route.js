import express from "express";
import { expenseController, adminController, categoryController } from "../controllers/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import requireAdminRole from "../middlewares/admin-check.middleware.js";
const adminRouter = express.Router();
adminRouter.get("users/all", authMiddleware, requireAdminRole, adminController.getAllUsers);
adminRouter.get("expenses/all", authMiddleware, requireAdminRole, adminController.getAllExpenses);
adminRouter.get("categories/all", authMiddleware, requireAdminRole, adminController.getAllGlobalCategories);
adminRouter.get("analytics/users", authMiddleware, requireAdminRole, adminController.getUsersAnalytics);
// adminRouter.get("analytics/expenses", authMiddleware, requireAdminRole, adminController.getExpensesAnalytics);
// adminRouter.get("analytics/categories", authMiddleware, requireAdminRole, adminController.getCategoriesAnalytics);
adminRouter.get("categories", authMiddleware, requireAdminRole, adminController.getAllGlobalCategories);
adminRouter.post("categories", authMiddleware, requireAdminRole, adminController.getAllExpenses);
adminRouter.route('categories/:id')
    .get(authMiddleware, requireAdminRole, adminController.getGlobalCategory)
    .patch(authMiddleware, requireAdminRole, adminController.getAllExpenses)
    .delete(authMiddleware, requireAdminRole, adminController.deleteGlobalCategory);
export default adminRouter;
//# sourceMappingURL=admin.route.js.map