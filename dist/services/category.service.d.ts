import CreateCategoryDto from "../dtos/category-dtos/create-category.dto.js";
export declare function getCategoryById(categoryId: string): Promise<import("sequelize").Model<any, any> | null>;
export declare function getCategories(userId: string): Promise<import("sequelize").Model<any, any>[]>;
export declare function updateCategory(categoryId: string, userId: string, updateData: object): Promise<import("sequelize").Model<any, any>>;
export declare function deleteCategory(categoryId: string, userId: string): Promise<{
    id: string;
} | null>;
export declare function createCategory(userId: string, data: CreateCategoryDto): Promise<import("sequelize").Model<any, any>>;
export declare function getAllCategories(): Promise<import("sequelize").Model<any, any>[]>;
export declare function getCategoriesAnalytics(): Promise<void>;
//# sourceMappingURL=category.service.d.ts.map