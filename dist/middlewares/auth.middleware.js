import * as JWTUtils from '../utils/JWT.util.js';
import AppError from '../utils/app-error.util.js';
export default function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        throw new AppError("No token provided", 401, "Token can not be found");
    const decoded = JWTUtils.verifyToken(token, process.env.ACCESS_REFRESH_TOKEN);
    req.user = decoded; // attach to request for controllers to use
    next();
}
//# sourceMappingURL=auth.middleware.js.map