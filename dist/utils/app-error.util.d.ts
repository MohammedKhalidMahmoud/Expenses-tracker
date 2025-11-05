export default class AppError extends Error {
    statusCode: number | string;
    details: string;
    constructor(message: string, statusCode: number | string, details: string);
}
//# sourceMappingURL=app-error.util.d.ts.map