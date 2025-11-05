import type { Request, Response } from "express";
export declare function subscribe(req: Request, res: Response): Promise<void>;
export declare function successPayment(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function cancelPayment(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=payment.controller.d.ts.map