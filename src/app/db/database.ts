import { Pool, createPool } from 'mysql2/promise'

// Conexion con la base de datos
export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        user: 'bsale_test',
        password: 'bsale_test',
        database: 'bsale_test',
        connectionLimit: 10
    });
    return connection;
}