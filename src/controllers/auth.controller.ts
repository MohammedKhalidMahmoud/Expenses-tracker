
import * as authService from "../services/auth.service.js";
import { successResponse } from "../utils/resposne.util.js";
import type { Request, Response } from "express";
import CreateUserDto from "../dtos/user-dtos/create-user.dto.js";
import { LoginRequestDto, SignupRequestDto, RefreshTokenRequestDto, LoginResponseDto, SignupResponseDto, RefreshTokenResponseDto } from '../dtos/auth-dtos/index.js'

export async function login(
  req: Request<{}, LoginResponseDto, LoginRequestDto>,
  res: Response
): Promise<Response> {
  const { email, password } = req.body;
  const data = await authService.login(email, password);

  const { user, accessToken, refreshToken } = data;

  return successResponse(
    res,
    "logged in successfully",
    { accessToken, refreshToken, user },
    200
  );
}

export async function signup(req: Request<{}, SignupResponseDto, CreateUserDto>, res: Response): Promise<Response> {
  const newUser = await authService.signup(req.body);
  return successResponse(res, "User created successfully", newUser, 200);
}

// export function resetPassword(req: Request, res: Response) {
//   const { oldPassword, newPassword, rePassword } = req.body;
//   authService.resetPassword(newPassword, rePassword);
//   res.status(200).json({ message: "reset password successfully" });
// }

export async function logout(req: Request, res: Response) {}

export async function refreshToken(req: Request<{}, RefreshTokenResponseDto, RefreshTokenRequestDto>, res: Response): Promise<Response> {
  console.log(req.body);
  const { refreshToken } = req.body;
  const data = await authService.refreshToken( refreshToken );
  return successResponse(res, "Token rfreshed successfully", data, 200);
}

export async function forgotPassword(req: Request, res: Response) {}


export async function verifyEmail(){}