import { Express } from "express";
import categories from './categories/index';
import products from "./products/index";

const components: Express[] = [
    
    products,
    categories
    
];

export default components;