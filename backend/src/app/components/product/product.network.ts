import express, { NextFunction, Request, Response, Router } from "express";

import productController from "./product.controller";
import responseModule from "../../modules/response.module";

const router: Router = express.Router();



router.get('/all', async(req: Request, res: Response) => {

    try {
        const result = await productController.getProducts();

        
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});


router.get('/:name', async(req: Request, res: Response) => {

    const name: string = req.params.name;
    
    try {

        const result = await productController.searchProductByName(name);

        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});



export default router;
