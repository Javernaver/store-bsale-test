import express, { Express } from 'express';

import router from "./product.network";

const products: Express = express();
products.use('/product', router);

export default products;