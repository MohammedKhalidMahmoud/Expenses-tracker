import AppError from "../utils/app-error.util.js";
export default function requireAdminRole(req, res, next) {
    if (req.user.role !== 'admin') {
        throw new AppError('Admin role required', 403, 'FORBIDDEN');
    }
    next();
}
//# sourceMappingURL=admin-check.middleware.js.map