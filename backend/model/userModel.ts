import db from '../db.ts';
import bcrypt from 'bcrypt';

interface GetUsersParams {
    username: string;
    password: string;
}

interface CreateUserParams{
  username: string;
  password: string;
  phone_number: number;
  role: string  
}  

export const User = {
    getAll: async ({username, password} : GetUsersParams) => {
        const [rows] = await db.query(`
            SELECT * FROM users WHERE username = ? AND password = ? LIMIT 1 `, [username, password]
        );
        return rows;
    },

    create: async ({username, password, phone_number, role}: CreateUserParams) => {
        
        const hashedPassword= await bcrypt.hash(password, 10);
        const [rows] = await db.query(`
            INSERT INTO users (username, password, phone_number, role) VALUES (?, ?, ?, ?)
            `, [username, hashedPassword, phone_number, role]
        ); 
        return rows;
    }, 
}
