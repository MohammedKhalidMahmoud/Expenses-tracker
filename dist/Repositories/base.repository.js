export default class BaseRepository {
    model;
    constructor(model) {
        if (!model) {
            throw new Error("Model must be provided to the repository");
        }
        this.model = model;
    }
    async create(data, excluded) {
        const instance = await this.model.create(data);
        if (excluded) {
            const found = await this.model.findByPk(instance.getDataValue("id"), {
                attributes: { exclude: excluded },
            });
            if (found)
                return found;
        }
        return instance;
    }
    async findAll(excluded) {
        if (excluded) {
            return await this.model.findAll({
                attributes: { exclude: excluded },
            });
        }
        return await this.model.findAll();
    }
    async findById(id, excluded) {
        if (excluded) {
            return await this.model.findByPk(id, {
                attributes: { exclude: excluded },
            });
        }
        return await this.model.findByPk(id);
    }
    async update(id, data, excluded) {
        const instance = await this.model.findByPk(id);
        if (!instance)
            return null;
        await instance.update(data);
        if (excluded) {
            return await this.model.findByPk(id, { attributes: { exclude: excluded } });
        }
        return await this.model.findByPk(id);
    }
    async delete(id) {
        const instance = await this.model.findByPk(id);
        if (!instance)
            return null;
        await instance.destroy();
        return instance.getDataValue("id");
    }
    async getCount() {
        return await this.model.count();
    }
    async getAverage() {
    }
}
//# sourceMappingURL=base.repository.js.map