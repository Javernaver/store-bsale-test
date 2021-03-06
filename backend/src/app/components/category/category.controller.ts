import { connect } from "../../db/database";

const getCategorys = async () => {

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



const getCategoryById = async (id: string) => {

    try {
        // conectar a la base de datos
        const conn = await connect();
        // consulta sql para obtener los productos
        const products = await conn.query('SELECT * FROM category WHERE category.id = ?', [id]);
        
        return products[0];
    }
    catch (e) {
        console.log(e)
    }

}


export default { getCategorys, getCategoryById }
