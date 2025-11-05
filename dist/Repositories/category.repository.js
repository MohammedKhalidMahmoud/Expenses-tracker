import BaseRepository from "./base.repository.js";
import Category from "../DB/models/category.model.js";
export default class CategoryRepository extends BaseRepository {
    constructor() {
        super(Category);
    }
    // Find all categories for a specific user
    async findByUserId(userId) {
        return await this.model.findAll({ where: { userId } });
    }
    // Find global categories (shared ones)
    async findGlobalCategories() {
        return await this.model.findAll({ where: { type: "global" } });
    }
    // Find custom categories (user-created)
    async findCustomCategories(userId) {
        return await this.model.findAll({
            where: { type: "custom", userId },
        });
    }
}
//# sourceMappingURL=category.repository.js.map