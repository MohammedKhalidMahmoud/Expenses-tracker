import type { Request, Response } from "express";
import CreateUserDto from "../dtos/user-dtos/create-user.dto.js";
import { LoginRequestDto, RefreshTokenRequestDto, LoginResponseDto, SignupResponseDto, RefreshTokenResponseDto } from '../dtos/auth-dtos/index.js';
export declare function login(req: Request<{}, LoginResponseDto, LoginRequestDto>, res: Response): Promise<Response>;
export declare function signup(req: Request<{}, SignupResponseDto, CreateUserDto>, res: Response): Promise<Response>;
export declare function logout(req: Request, res: Response): Promise<void>;
export declare function refreshToken(req: Request<{}, RefreshTokenResponseDto, RefreshTokenRequestDto>, res: Response): Promise<Response>;
export declare function forgotPassword(req: Request, res: Response): Promise<void>;
export declare function verifyEmail(): Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map