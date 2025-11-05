export function successResponse(res, message, data, statusCode = 200) {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
        error: null,
    });
}
export function errorResponse(res, message, statusCode = 500, details) {
    return res.status(statusCode).json({
        success: false,
        message,
        data: null,
        error: {
            code: +statusCode,
            details,
        },
    });
}
//# sourceMappingURL=resposne.util.js.map