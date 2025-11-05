import type { NextFunction } from 'express';
import * as JWTUtils from '../utils/JWT.util.js';
import AppError from '../utils/app-error.util.js';
import type {Request, Response } from "express";
import type JwtUserPayload from 'interfaces/jwt-user-payload.js';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) throw new AppError("No token provided", 401, "Token can not be found")

    const decoded = JWTUtils.verifyToken(token, process.env.ACCESS_REFRESH_TOKEN!);
    req.user = decoded; // attach to request for controllers to use
    next();
}
