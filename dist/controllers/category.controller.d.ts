import type { Request, Response } from "express";
export declare function getCategoryById(req: Request<{
    id: string;
}>, res: Response): Promise<Response>;
export declare function getCategories(req: Request<{}, {}, {
    user: {
        id: string;
    };
}>, res: Response): Promise<Response>;
export declare function updateCategory(req: Request, res: Response): Promise<Response>;
export declare function deleteCategory(req: Request, res: Response): Promise<Response>;
export declare function createCategory(req: Request, res: Response): Promise<Response>;
export declare function getAllCategories(req: Request, res: Response): Promise<Response>;
//# sourceMappingURL=category.controller.d.ts.map