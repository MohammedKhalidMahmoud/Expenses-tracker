import { errorResponse } from "../utils/resposne.util.js";
import type IError from "../interfaces/error.interfcae.js";
import type {Request, Response, NextFunction} from "express";

function globalErrorHandler(err: IError, req: Request, res: Response, next: NextFunction){
  console.log(err);
  const {statusCode, message, details} = err;
  
  // Use unified error response format
  return errorResponse(res, message, statusCode, details);
};

export default globalErrorHandler;
