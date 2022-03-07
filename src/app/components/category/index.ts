import express, { Express } from 'express';

import router from "./category.network";

const categories: Express = express();
categories.use('/category', router);

export default categories;