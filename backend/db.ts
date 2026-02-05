import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

async function testConnection() {
    try {
        const connection = await db.getConnection();
        console.log("MySQL Connected");
        connection.release();
    } catch (err: any) {
        console.error("MySQL connection Failed", err.message);
        process.exit(1);
    }
}

testConnection();

export default db;

