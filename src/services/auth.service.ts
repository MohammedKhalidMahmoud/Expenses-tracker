// import User from "../Models/User.model.js";
import * as userService from "./user.service.js";
import AppError from '../utils/app-error.util.js';
import bcrypt  from 'bcrypt';
import * as jwtUtil  from "../utils/JWT.util.js";
// import SignupRequestDto from "../dtos/auth-dtos/signup-request.dto.js";
import CreateUserDto from "../dtos/user-dtos/create-user.dto.js";
import UserRepository from "../repositories/user.repository.js";
import { userExcludedFields } from "../constants.js";
import type SignupRequestDto from "dtos/auth-dtos/signup-request.dto.js";
// import { verifyToken } from './../../dist/utils/JWT.util.js';
import RefreshTokenRequest from './../dtos/auth-dtos/refresh-token-request.dto.js';


// const accessSecretToken=process.env.ACCESS_TOKEN_SECRET;
// const refreshSecretToken=process.env.ACCESS_TOKEN_SECRET;

const userRepository= new UserRepository();

export async function login(email: string, password: string) {
    const user= await userRepository.findByEmail(email, []);
    console.log(user);
    if(!user) throw new AppError("Invalid email or password", 401, "can not find the user with the given credentials");
        console.log('loginusedpassword', password);
        console.log('savedpassword', user.getDataValue('password'));
    const isMatch= await bcrypt.compare(password, user.getDataValue('password'))
    if(!isMatch) throw new AppError("Invalid email or password", 401, "can not find the user with the given credentials");

    let accessToken= jwtUtil.generateToken(process.env.ACCESS_TOKEN_SECRET!, user.getDataValue('id'), user.getDataValue('role'), email, '1h');
    let refreshToken= jwtUtil.generateToken(process.env.REFRESH_TOKEN_SECRET!, user.getDataValue('id'), user.getDataValue('role'), email, '7d');

    return {
        user,
        accessToken,
        refreshToken
    };
}

export async function signup(body: CreateUserDto) {
    return await userService.createUser(body);
}

export async function refreshToken( refreshToken: string){
    // console.log("checkpoint1")
    // console.log("refreshToken", refreshToken);
    // console.log("refreshTokenSecret", process.env.REFRESH_TOKEN_SECRET!);
    const { id, JWI:refreshJWI }= jwtUtil.verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET!);
    console.log("checkpoint2")

    await jwtUtil.revokeTokens(refreshJWI );
    console.log("checkpoint#3");
    // const user= userService.getUserById(id);
    const user= await userRepository.findById(id);
    if(!user) throw new AppError("User not found", 404, "No user found with the given ID");
    // generate new RefreshToken and new accessToken and invalidate the old ones
    const newRefreshToken= jwtUtil.generateToken(process.env.REFRESH_TOKEN_SECRET!, user.getDataValue('id'), user.getDataValue('role'), user.getDataValue('email'), process.env.REFRESH_TOKEN_LIFE_LIMIT! );
    const newِAccessToken= jwtUtil.generateToken(process.env.ACCESS_TOKEN_SECRET!, user.getDataValue('id'), user.getDataValue('role'), user.getDataValue('email'), process.env.ACCESS_TOKEN_LIFE_LIMIT! );
    return {accessToken : newِAccessToken, refreshToken: newRefreshToken}
}

export async function forgetPassword(email: string){

}

export async function resetPassword(newPassword: string, rePassword: string){

}


