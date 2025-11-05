import type { NextFunction } from "express";
import AppError from "../utils/app-error.util.js";
import  type {Request, Response} from "express";
export default function requireAdminRole(req: Request, res: Response, next: NextFunction) {
    if(req.user!.role!=='admin'){
        throw new AppError('Admin role required', 403, 'FORBIDDEN');
    }
    next();
}