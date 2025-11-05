import type { Response } from "express";
export declare function successResponse(res: Response, message: string, data: object, statusCode?: number): Response;
export declare function errorResponse(res: Response, message: string, statusCode: any | undefined, details: string): Response;
//# sourceMappingURL=resposne.util.d.ts.map