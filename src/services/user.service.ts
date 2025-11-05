// import User from '../DB/models/user.model.ts';
import AppError from "../utils/app-error.util.js";
import bcrypt, { hash } from "bcrypt";
import UserRepository from "../repositories/user.repository.js";
import type SignupRequestDto from "../dtos/auth-dtos/signup-request.dto.js";
import CreateUserDto from "../dtos/user-dtos/create-user.dto.js";

import { userExcludedFields } from "../constants.js";
//done
const userRepository = new UserRepository();


export async function createUser(body: CreateUserDto) {
  const { name, email, password, rePassword, role, isActive } = body;
  if (password !== rePassword) {
    throw new AppError("Passwords do not match", 400, "Password and rePassword do not match.");
  }
  const user = await getUserByEmail(email);
  if (user) {
    throw new AppError("Email already exists", 409, "This email has already been used.");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userRepository.create({
    name,
    email,
    password: hashedPassword,
    role,
    isActive,
  }, userExcludedFields);
  return newUser;
}

//done
export async function getUsers(page = 1, limit = 10) {
  // paginated version
  const users= await userRepository.findAll(userExcludedFields)   //fetch all
  return users;
}

// done
export async function getUserById(id: string) {
  // return await userRepostory.findById(id);
  return await userRepository.findById(id, userExcludedFields);
}

//done
export async function getUserByEmail(email: string) {
  const user= userRepository.findByEmail(email, userExcludedFields);
  return user;
}

//done
export async function deleteUserById(id: string) {
  const user = await getUserById(id);
  if (!user)
    throw new AppError(
      "User not found",
      404,
      "No user found with the gived ID"
    );
  await userRepository.delete(id)
  return { id: user.getDataValue('id') };
}

//done
export async function modifyUser(id: string, updateData: object) {
  let user = await getUserById(id);
  if (!user)
    throw new AppError(
      "User not found",
      404,
      "No user found with the given ID"
    );
  await userRepository.update(id, updateData , userExcludedFields )
  user = await getUserById(id);
  return user;
}

//done
export async function deactivateUser(id: string) {
  const user = await getUserById(id);
  if (!user) return null;
  await userRepository.update(id, {isActive: false}, userExcludedFields);
  return user;
}

//done
export async function updatePassword(
  id: string,
  password1: string,
  newPassword: string
) {
  const user = await userRepository.findById(id);
  if (!user)
    throw new AppError(
      "User not found",
      404,
      "No user found with the given ID"
    );
  let password2= user.getDataValue('password');
  password2 = hash(password2, process.env.SALT_ROUNDS!);
  if (password1 !== password2)
    throw new AppError("password is incorrcet", 400, "password is incorrcet");
  await userRepository.update(id, { password: newPassword }, userExcludedFields);
  return user;
}


//analytics
export async function getUsersAnalytics(){

  const totalUsersCount = await userRepository.getCount()   // base Repository
  const activeUsersCount = await userRepository.getActiveUsersCount()  // userRepository
  const avgExpensesPerUser = await userRepository.getAvgExpensesPerUser() // user Repository
  const newUsersThisMonth = await userRepository.getNewUsersThisMonthCount() // userRepository
  const subscripedUsersCount = await userRepository.getSubscripedUsersCount() // userRepository
  
  return { totalUsersCount, activeUsersCount, avgExpensesPerUser, newUsersThisMonth, subscripedUsersCount };
}


    