import type { Request, Response } from "express";
import { User }  from "../model/userModel.ts";
import  jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();


export const userController = {
    loginUser : async (req: Request, res: Response) => {
        const {username, password} = req.body;
        const users: any = await User.getAllByUsername(username);

       try {
            if(!users || users.length === 0) {
                return res.status(400).json({
                    success: false, 
                    msg:"User not found",
                });
            }
            
            const user = users[0];

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    success: false, 
                    msg:"Invalid credentials"
                });
            }

            const token = jwt.sign(
                {id: user.user_id, username: user.username},
                process.env.JWT_SECRET as string,
                { expiresIn: '1h' } 
            ); 

            return res.status(200).json({
                success: true,
                msg: "Login successful",
                token,
                user: { id: user.user_id, username: user.username }
            });

        } catch (err) {
            res.status(500).json({
                success: false,
                msg: "Internal Server Error"
            });
        }
    },

    registerUser: async (req: Request, res: Response) => {
        const {username, password, phone_number, role} = req.body || {};
        const existingUser: any = await User.getAllByUsername(username);

        try {
            if (existingUser && existingUser.length > 0) {
                return res.status(400).json({
                    success: false,
                    msg: "Username already exists"
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const registerUser: any = await User.create({
                username, password: hashedPassword, phone_number, role
            });

            if (!registerUser) {
                return res.status(400).json({
                    success: false,
                    msg: "Failed to create user"
                });
            }

            res.status(200).json({
                success: true,
                msg: "User created Successfully",
                user: {
                    id: registerUser.insertId,
                    username,
                    phone_number,
                    role
                }
            })

        } catch (err) {
            res.status(500).json({
                success: false,
                msg: "Internal Server Error"
            });
        }
    }
}

