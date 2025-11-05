import * as userService from "../services/user.service.js";
import AppError from "../utils/app-error.util.js";
import { successResponse } from "../utils/resposne.util.js";
import type { Request, Response } from "express";



export async function getUserById(req: Request, res: Response): Promise<Response>{
    const userId = req.params.id;
    if(!userId) throw new AppError("userId not found", 400, "userId is missing in the request params")
    const user = await userService.getUserById(userId);
    if(!user)
        throw new AppError("User not found", 404, "No user with the given ID") 
    return successResponse(res, "User retrieved successfully", user, 200)
}

export async function deleteUserById(req: Request, res: Response): Promise<Response>{
    const userId = req.params.id;
    if(!userId) throw new AppError("userId not found", 400, "UserId is missing in the request params.")
        const deleted = await userService.deleteUserById(userId);
        if(!deleted){
            throw new AppError("User not found", 404, "No user with the given ID")
        }
        return successResponse(res, "User deleted successfully", deleted, 200)
}


export async function updateUser(req: Request, res: Response): Promise<Response>{
    const userId = req.params.id;
    const updateData = req.body;
    if(!userId) throw new AppError("userId not found", 400, "userId is missing in the request params");
    const user = await userService.getUserById(userId);
    if(!user){
        throw new AppError("User not found", 404, "No user with the given ID")
    }
    await userService.modifyUser(userId, updateData);
    return successResponse(res, "User updated successfully", user, 200)
    
}



export async function deactivateUser(req: Request, res: Response): Promise<Response>{
    const userId = req.params.id;
    if(!userId) throw new AppError("userId not found",400, "userId is missing in the request params.")
    const updated = await userService.deactivateUser(userId);
    if(!updated)
        throw new AppError("User not found", 404, "No user with the given ID")
        
    return successResponse(res, "User deactivated successfully", updated, 200);
    
}

export async function updateProfilePicture(req: Request, res: Response): Promise<Response>{
    return successResponse(res, "Profile picture updated successfully", req.file!, 200);
}