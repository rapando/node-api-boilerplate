/**
 * Db connection
 *
 */

import dotenv from "dotenv";
import mysql from "mysql";
import path from "path";


dotenv.config({
    path: path.join(__dirname, "../configs/.env")
});



const pool = mysql.createPool({
    connectionLimit: 20,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    multipleStatements: true
});

export default pool;