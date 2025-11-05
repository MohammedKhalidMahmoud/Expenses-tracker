import * as authController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import express from 'express';
const authRouter = express.Router();
authRouter.post('/login', authController.login);
authRouter.post('/signup', authController.signup);
authRouter.post('/refresh-token', authController.refreshToken);
authRouter.post('/forgot-password', authController.forgotPassword);
authRouter.post('/logout', authMiddleware, authController.logout);
authRouter.get('/verify-email', authMiddleware, authController.verifyEmail);
export default authRouter;
//# sourceMappingURL=auth.route.js.map