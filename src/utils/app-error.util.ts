export default class AppError extends Error {
  statusCode: number| string
  details: string
  constructor(message: string, statusCode: number| string, details: string) {
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

 