import { errorResponse } from "../utils/resposne.util.js";
function globalErrorHandler(err, req, res, next) {
    console.log(err);
    const { statusCode, message, details } = err;
    // Use unified error response format
    return errorResponse(res, message, statusCode, details);
}
;
export default globalErrorHandler;
//# sourceMappingURL=global-error-handler.middleware.js.map