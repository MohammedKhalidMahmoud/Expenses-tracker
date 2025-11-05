import BaseRepository from "./base.repository.js";
import Category from "../DB/models/category.model.js";
export default class CategoryRepository extends BaseRepository<typeof Category.prototype> {
    constructor();
    findByUserId(userId: number): Promise<import("sequelize").Model<any, any>[]>;
    findGlobalCategories(): Promise<import("sequelize").Model<any, any>[]>;
    findCustomCategories(userId: string): Promise<import("sequelize").Model<any, any>[]>;
}
//# sourceMappingURL=category.repository.d.ts.map