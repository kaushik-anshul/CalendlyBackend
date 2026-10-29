export class ApiError extends Error {
    readonly statuscode : number;
    readonly details? : unknown;
    constructor(statuscode : number, message : string, details? : unknown) {
        super(message);
        this.statuscode = statuscode;
        this.details = details;
        this.name = "ApiError";
        Error.captureStackTrace(this, this.constructor);
    }
}


export const badRequest = (message : string, details? : unknown) => new ApiError(400 ,message, details);
export const notFound = (message : string, details? : unknown) => new ApiError(404, message, details);
export const internalServerError = (message = "Internal server error") => new ApiError(500, message);
export const unauthorized = (message : string, details? : unknown) => new ApiError(401, message, details);
export const forbidden = (message : string, details? : unknown) => new ApiError(403, message, details);
