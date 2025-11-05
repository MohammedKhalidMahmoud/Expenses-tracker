import type IError from "../interfaces/error.interfcae.js";
import type { Request, Response, NextFunction } from "express";
declare function globalErrorHandler(err: IError, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
export default globalErrorHandler;
//# sourceMappingURL=global-error-handler.middleware.d.ts.map