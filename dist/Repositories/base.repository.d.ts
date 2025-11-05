import type { Model, ModelStatic, CreationAttributes, Attributes } from "sequelize";
export default abstract class BaseRepository<T extends Model> {
    protected model: ModelStatic<T>;
    constructor(model: ModelStatic<T>);
    create(data: CreationAttributes<T>, excluded?: string[]): Promise<T>;
    findAll(excluded?: string[]): Promise<T[]>;
    findById(id: string, excluded?: string[]): Promise<T | null>;
    update(id: string, data: Partial<Attributes<T>>, excluded?: string[]): Promise<T | null>;
    delete(id: string): Promise<T | null>;
    getCount(): Promise<number>;
    getAverage(): Promise<void>;
}
//# sourceMappingURL=base.repository.d.ts.map