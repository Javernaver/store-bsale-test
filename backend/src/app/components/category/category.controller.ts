import { connect } from "../../db/database";

async function getCategorys() {

    try {
        // conectar a la base de datos
        const conn = await connect();
        // consulta sql para obtener los productos
        const products = await conn.query('SELECT * FROM category');
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}

async function getProductsCategory(cat: string) {

    try {
        // conectar a la base de datos
        const conn = await connect();
        // consulta sql para obtener los productos
        const products = await conn.query(
            'SELECT product.id, product.name, product.url_image, product.price, product.discount, product.category FROM product LEFT JOIN category ON product.category = category.id WHERE category.id = ?', [cat]);
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}




export default { getCategorys, getProductsCategory }
