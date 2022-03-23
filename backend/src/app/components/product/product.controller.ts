import { Product } from "../../models/product.model";
import { connect } from "../../db/database";

const getProducts = async () => {

    try {
        // conectar a la base de datos
        const conn = await connect();
        // consulta sql para obtener los productos
        const products = await conn.query('SELECT * FROM product');
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}

const getDiscountedProducts = async () => {

    try {
        // conectar a la base de datos
        const conn = await connect();
        // consulta sql para obtener los productos
        const products = await conn.query('SELECT * FROM product WHERE product.discount > 0');
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}

const getProductById = async (id: string) => {

    try {
        // conectar a la base de datos
        const conn = await connect();
        // consulta sql para obtener los productos
        const products = await conn.query('SELECT * FROM product WHERE product.id = ?', [id]);
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}

const searchProductByName = async (name: string) => {

    try {
        // conectar a la base de datos
        const conn = await connect();
        // consulta sql para obtener los productos
        const products = await conn.query('SELECT * FROM product WHERE name like ?', ['%'+name+'%']);
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}

const getProductsCategory = async (cat: string) => {

    try {
        
        // conectar a la base de datos
        const conn = await connect();
        
        let products;

        // consulta sql para obtener las bebidas alcoholicos
        if (cat == 'alcohol') {
            products = await conn.query(
                'SELECT product.id, product.name, product.url_image, product.price, product.discount, product.category FROM product LEFT JOIN category ON product.category = category.id WHERE category.id = 2 OR category.id = 3 OR category.id = 6 OR category.id = 7');
        }
        else {
            // consulta sql para obtener los productos de la categoria requerida
            products = await conn.query(
                'SELECT product.id, product.name, product.url_image, product.price, product.discount, product.category FROM product LEFT JOIN category ON product.category = category.id WHERE category.id = ?', [cat]);
        }
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}


export default { getProducts, searchProductByName, getProductById, getProductsCategory, getDiscountedProducts }