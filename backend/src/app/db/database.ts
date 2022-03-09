import { Pool, createPool } from 'mysql2/promise'

// Conexion con la base de datos
export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        connectionLimit: 10
    });
    return connection;
}