import type { Request, Response } from "express";

export function successResponse(
  res: Response,
  message: string,
  data: object,
  statusCode= 200
): Response {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    error: null,
  });
}

export function errorResponse(
  res: Response,
  message: string,
  statusCode: any = 500,
  details: string
): Response {
  return res.status(statusCode).json({
    success: false,
    message,
    data: null,
    error: {
      code: +statusCode,
      details,
    },
  });
}
