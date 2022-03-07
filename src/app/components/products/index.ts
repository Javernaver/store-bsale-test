import express, { Express } from 'express';

import router from "./products.network";

const products: Express = express();
products.use('/products', router);

export default products;