import * as authController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import express from 'express';
const authRouter = express.Router();
authRouter.post('/login', authController.login);
authRouter.post('/signup', authController.signup);
// authRouter.post(
//   '/resetpassword',
//   authMiddleware,
//   authController.resetPassword
// );
authRouter.post('/refresh-token', authMiddleware, authController.refreshToken);
authRouter.post('/forgot-password', authController.forgotPassword);
// authRouter.post('/logout', authMiddleware, AuthController.logout);
export default authRouter;
//# sourceMappingURL=auth.router.js.map