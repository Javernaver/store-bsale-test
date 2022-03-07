import { Express } from "express";
import category from './category/index';
import product from "./product/index";

const components: Express[] = [
    
    product,
    category
    
];

export default components;