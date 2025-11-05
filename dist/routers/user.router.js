import express from 'express';
// import * as UserController from "../Controllers/index.ts";
import * as userController from "../controllers/user.controller.js";
import authMiddleware from '../middlewares/auth.middleware.js';
import requireAdminRole from '../middlewares/admin-check.middleware.js';
// import {upload } from '../Middlewares/multer.middleware.ts';
const userRouter = express.Router();
userRouter.route('/')
    .get(authMiddleware, requireAdminRole, userController.getUsers);
userRouter.route('/:id')
    .get(authMiddleware, userController.getUserById)
    .put(authMiddleware, userController.updateUser)
    .delete(authMiddleware, userController.deleteUserById);
userRouter.patch('/:id/deactivate', authMiddleware, userController.deactivateUser);
// .patch('/activate', authMiddleware, requireAdminRole, UserController.deactivateUser);
// userRouter.post('/uploads', upload.single('image') ,UserController.updateProfilePicture);
export default userRouter;
//# sourceMappingURL=user.router.js.map