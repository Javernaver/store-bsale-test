import express, { Express } from 'express';

import router from "./categories.network";

const categories: Express = express();
categories.use('/categories', router);

export default categories;