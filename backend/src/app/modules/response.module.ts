import { Request, Response } from "express";

function success(req: Request, res: Response, message: any, status?: number) {
    let statusCode: number = status || 200;
    
    res.status(statusCode).send({
        error: "Everything is fine! :D",
        status: statusCode,
        message: message
    });
}

function error(req: Request, res: Response, message: any, status?: number) {
    let statusCode: number = status || 500;
    
    res.status(statusCode).send({
        error: message,
        status: statusCode,
        message: "Too bad :c"
    });
}

export default { success, error };