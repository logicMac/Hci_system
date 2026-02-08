import db from '../db.ts';

interface CreateUserParams{
  username: string;
  password: string;
  phone_number: string;
  role: string  
}  

export const User = {
    getAllByUsername: async (username: string) => {
        const [rows] = await db.query(`
            SELECT * FROM users WHERE username = ? LIMIT 1 `, [username]
        );
        return rows;
    },

    getById: async(user_id: number) => {
        const [rows] = await db.query(`
            SELECT * FROM users WHERE user_id = ? 
        `,[user_id]
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

    saveOtp: async (user_id: number, otp: string, expires: number) => {
        const [rows] = await db.query(`
            INSERT INTO user_otps (user_id, otp, expires) VALUES (?, ?, ?)  
            `, [user_id, otp, expires]
        );
        
        return rows;
    },

    verifyOtp: async (user_id: number, otp: string) => {
        const currentTime = new Date();
        const [rows] = await db.query(`
            SELECT * FROM user_otps 
            WHERE user_id = ? AND otp = ? AND expires > ?
            `, [user_id, otp, currentTime]
        );

        return rows;
    },

    setAuthenticated: async (user_id: number, authenticated: boolean) => {
        const [rows] = await db.query(`
            UPDATE users SET authenticated = ? WHERE user_id = ?
            `, [authenticated, user_id]
        );
        
        return rows;
    } 
}
