import express from 'express';
// import * as UserController from "../Controllers/index.ts";
import * as userController from "../controllers/user.controller.js";
import authMiddleware from '../middlewares/auth.middleware.js';
import upload from '../middlewares/multer.middleware.js';
const userRouter = express.Router();
userRouter.route('/:id')
    .get(authMiddleware, userController.getUserById)
    .put(authMiddleware, userController.updateUser)
    .delete(authMiddleware, userController.deleteUserById);
userRouter.patch('/:id/deactivate', authMiddleware, userController.deactivateUser);
// .patch('/activate', authMiddleware, requireAdminRole, UserController.deactivateUser);
userRouter.post('/:id/uploads', authMiddleware, upload.single('image'), userController.updateProfilePicture);
export default userRouter;
//# sourceMappingURL=user.route.js.map