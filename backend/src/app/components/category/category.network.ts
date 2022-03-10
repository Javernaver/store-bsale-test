import express, { NextFunction, Request, Response, Router } from "express";

import categoryController from "./category.controller";
import responseModule from "../../modules/response.module";

const router: Router = express.Router();


router.get('/all', async(req: Request, res: Response) => {

    try {
        const result = await categoryController.getCategorys();

    
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});



router.get('/id/:id', async(req: Request, res: Response) => {

    const id: string = req.params.id;

    try {
        const result = await categoryController.getCategoryById(id);

    
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

export default router;