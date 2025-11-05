import * as categoryService from "../services/category.service.js";
import AppError from "../utils/app-error.util.js";
import { successResponse } from "../utils/resposne.util.js";
export async function getCategoryById(req, res) {
    const { id: categoryId } = req.params;
    console.log("categoryId", categoryId);
    const category = await categoryService.getCategoryById(categoryId);
    if (!category) {
        throw new AppError("Category not found", 404, "No category with the given ID");
    }
    console.log(category);
    return successResponse(res, "Category retrieved successfully", category, 200);
}
export async function getCategories(req, res) {
    const userId = req.user.id;
    const categories = await categoryService.getCategories(userId);
    if (categories)
        return successResponse(res, "Categories retrieved successfully", categories, 200);
    else
        throw new AppError("No categories found", 404, "No categories found for this user");
}
export async function updateCategory(req, res) {
    const { id: categoryId } = req.params;
    if (!categoryId)
        throw new AppError("CategoryId can not be found", 400, "categoryId is missing.");
    const userId = req.user.id;
    const updateData = req.body;
    const updatedCategory = await categoryService.updateCategory(categoryId, userId, updateData);
    return successResponse(res, "Category updated successfully", updatedCategory, 201);
}
export async function deleteCategory(req, res) {
    const { id: categoryId } = req.params;
    if (!categoryId)
        throw new AppError("CatgeoryId is missing", 400, "catgeoryId is missing in the params");
    const userId = req.user.id;
    const deletedCategory = await categoryService.deleteCategory(categoryId, userId);
    if (deletedCategory) {
        return successResponse(res, "Category deleted successfully", deletedCategory, 200);
    }
    else {
        throw new AppError("Category not found", 404, "No category with the given ID for this user");
    }
}
export async function createCategory(req, res) {
    const userId = req.user.id;
    const data = req.body;
    const postedCategory = await categoryService.createCategory(userId, data);
    if (postedCategory) {
        return successResponse(res, "Category creted successfully", postedCategory, 200);
    }
    else {
        throw new AppError("Category not found", 404, "No category with the given ID for this user");
    }
}
export async function getAllCategories(req, res) {
    const categories = await categoryService.getAllCategories();
    if (!categories) {
        throw new AppError("No categories found", 404, "No categories available");
    }
    return successResponse(res, "All categories retrieved successfully", categories, 200);
}
//# sourceMappingURL=category.controller.js.map