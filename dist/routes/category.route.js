import express from "express";
import * as categoryController from "../controllers/category.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import requireAdminRole from "../middlewares/admin-check.middleware.js";
const categoryRouter = express.Router();
categoryRouter.get("/all", authMiddleware, requireAdminRole, categoryController.getAllCategories);
categoryRouter
    .route("/")
    .get(authMiddleware, categoryController.getCategories)
    .post(authMiddleware, categoryController.createCategory);
categoryRouter
    .route("/:id")
    .get(authMiddleware, categoryController.getCategoryById)
    .put(authMiddleware, categoryController.updateCategory)
    .delete(authMiddleware, categoryController.deleteCategory);
export default categoryRouter;
//# sourceMappingURL=category.route.js.map