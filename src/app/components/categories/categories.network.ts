import express, { NextFunction, Request, Response, Router } from "express";

import categorysController from "./categories.controller";
import responseModule from "../../modules/response.module";

const router: Router = express.Router();


router.get('/all', async(req: Request, res: Response) => {

    try {
        const result = await categorysController.getCategorys();

    
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

export default router;