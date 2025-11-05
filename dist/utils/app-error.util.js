export default class AppError extends Error {
    statusCode;
    details;
    constructor(message, statusCode, details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        // console.log(this.details);
        // Capturing stack trace, useful for debugging
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AppError);
        }
    }
}
//# sourceMappingURL=app-error.util.js.map