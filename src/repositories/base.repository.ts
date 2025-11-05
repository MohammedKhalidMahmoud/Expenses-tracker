// src/repositories/base.repository.ts
import type {
  Model,
  ModelStatic,
  FindOptions,
  CreationAttributes,
  Attributes,
} from "sequelize";

export default abstract class BaseRepository<T extends Model> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    if (!model) {
      throw new Error("Model must be provided to the repository");
    }
    this.model = model;
  }

  async create(data: CreationAttributes<T>, excluded?: string[]): Promise<T> {
    const instance = await this.model.create(data);

    if (excluded) {
      const found = await this.model.findByPk(instance.getDataValue("id"), {
        attributes: {exclude: excluded},
      });
      if (found) return found;
    }

    return instance;
  }

  async findAll(excluded?: string[]): Promise<T[]> {
    if(excluded){
      return await this.model.findAll({
      attributes: {exclude: excluded},
      });
    }
    return await this.model.findAll()
  }

  async findById(id: string, excluded?: string[]): Promise<T | null> {
    if(excluded){
      return await this.model.findByPk(id, {
      attributes: {exclude: excluded},
      });
    }
    return await this.model.findByPk(id);
  }

  async update(
    id: string,
    data: Partial<Attributes<T>>,
    excluded?: string[]
  ): Promise<T | null> {
    const instance = await this.model.findByPk(id);
    if (!instance) return null;
    await instance.update(data);
    if(excluded){
      return  await this.model.findByPk(id, { attributes: {exclude: excluded} });
    }
    return await this.model.findByPk(id);
    
  }

  async delete(id: string): Promise<T | null> {
    const instance = await this.model.findByPk(id);
    if (!instance) return null;
    await instance.destroy();
    return instance.getDataValue("id");
  }

  async getCount(){
    return await this.model.count();
  }

  async getAverage(){
    
  }
}
