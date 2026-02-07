import db from '../db.ts';

interface CreateUserParams{
  username: string;
  password: string;
  phone_number: number;
  role: string  
}  

export const User = {
    getAllByUsername: async (username: string) => {
        const [rows] = await db.query(`
            SELECT * FROM users WHERE username = ? LIMIT 1 `, [username]
        );
        return rows;
    },

    create: async ({username, password, phone_number, role}: CreateUserParams) => {
        
        
        const [rows] = await db.query(`
            INSERT INTO users (username, password, phone_number, role) VALUES (?, ?, ?, ?)
            `, [username, password, phone_number, role]
        ); 
        return rows;
    }, 
}
