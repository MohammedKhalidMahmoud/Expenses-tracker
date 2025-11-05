import * as authService from "../services/auth.service.js";
import { successResponse } from "../utils/resposne.util.js";
import CreateUserDto from "../dtos/user-dtos/create-user.dto.js";
import { LoginRequestDto, SignupRequestDto, RefreshTokenRequestDto, LoginResponseDto, SignupResponseDto, RefreshTokenResponseDto } from '../dtos/auth-dtos/index.js';
export async function login(req, res) {
    const { email, password } = req.body;
    const data = await authService.login(email, password);
    const { user, accessToken, refreshToken } = data;
    return successResponse(res, "logged in successfully", { accessToken, refreshToken, user }, 200);
}
export async function signup(req, res) {
    const newUser = await authService.signup(req.body);
    return successResponse(res, "User created successfully", newUser, 200);
}
// export function resetPassword(req: Request, res: Response) {
//   const { oldPassword, newPassword, rePassword } = req.body;
//   authService.resetPassword(newPassword, rePassword);
//   res.status(200).json({ message: "reset password successfully" });
// }
export async function logout(req, res) { }
export async function refreshToken(req, res) {
    console.log(req.body);
    const { refreshToken } = req.body;
    const data = await authService.refreshToken(refreshToken);
    return successResponse(res, "Token rfreshed successfully", data, 200);
}
export async function forgotPassword(req, res) { }
export async function verifyEmail() { }
//# sourceMappingURL=auth.controller.js.map