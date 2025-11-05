import { Op } from "sequelize";
// import Category from '../DB/models/category.model.ts';
import CategoryRepository from "../repositories/category.repository.js";
import * as userService from "../services/user.service.js";
import AppError from "../utils/app-error.util.js";
import UserRepository from "../repositories/user.repository.js";
import CreateCategoryDto from "../dtos/category-dtos/create-category.dto.js";
const categoryRepository = new CategoryRepository();
const userRepository = new UserRepository();
export async function getCategoryById(categoryId) {
    const category = categoryRepository.findById(categoryId);
    return category;
}
export async function getCategories(userId) {
    const categories = await categoryRepository.findCustomCategories(userId);
    return categories;
}
export async function updateCategory(categoryId, userId, updateData) {
    const user = await userService.getUserById(userId);
    // const category= await Category.findByPk(categoryId)
    const category = await categoryRepository.findById(categoryId);
    if (!category)
        throw new AppError("Category not found", 404, "Can not find category with this Id");
    if (category.getDataValue("type") === "global" &&
        user?.getDataValue("role") !== "admin") {
        throw new AppError("Only admins can modify global categories", 403, "FORBIDDEN");
    }
    if (category.getDataValue("type") === "custom" &&
        user?.getDataValue("id") !== category.getDataValue("userId")) {
        throw new AppError("Only the user can delete his own custom categories", 403, "FORBIDDEN");
    }
    await categoryRepository.update(categoryId, updateData);
    return category;
}
export async function deleteCategory(categoryId, userId) {
    const user = await userRepository.findById(userId);
    const category = await getCategoryById(categoryId);
    if (!category)
        return null;
    if (category.getDataValue("type") === "global" &&
        user?.getDataValue("role") !== "admin") {
        throw new AppError("Only admins can delete global categories", 403, "FORBIDDEN");
    }
    if (category.getDataValue("type") === "custom" &&
        user?.getDataValue("id") !== category.getDataValue("userId")) {
        throw new AppError("Only user can delete this associated custom categories", 403, "FORBIDDEN");
    }
    await categoryRepository.delete(categoryId);
    // console.log(category);
    return { id: categoryId };
}
export async function createCategory(userId, data) {
    const user = await userRepository.findById(userId);
    if (data.type === "global" && user?.getDataValue("role") !== "admin") {
        throw new AppError("Only admins can carete global categories", 403, "FORBIDDEN");
    }
    // Create new category
    const newCategory = await categoryRepository.create({
        ...data,
        userId: data.type === "custom" ? userId : null,
    });
    //   console.log(newCategory);
    return newCategory;
}
export async function getAllCategories() {
    return await categoryRepository.findAll();
}
export async function getCategoriesAnalytics() {
}
//# sourceMappingURL=category.service.js.map