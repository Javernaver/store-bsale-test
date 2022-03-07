import { Product } from "../../models/product.model";
import { connect } from "../../db/database";

async function getProducts() {

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

async function searchProductByName(name: string) {

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


export default { getProducts, searchProductByName }