import type { Request, Response } from "express";
import { User }  from "../model/userModel.ts";
import  jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();


export const userController = {
    loginUser : async (req: Request, res: Response) => {
        const {username, password} = req.body;
        const users = await User.getAll({username, password});

        if(!users) {
            res.status(400).json({
                success: true, 
                msg:"Failed to Login", 
                user: {users}
            });
        }

        const loginUser = () => {
            
        }
    },

    registerUser: async (req: Request, res: Response) => {
        const {username, password, phone_number, role} = req.body || {};
        const registerUser = await User.create({
            username, password,phone_number, role
        });

        if (!registerUser) {
            res.status(400).json({
                success: false,
                msg: "Failed to create user"
            });
        }

        res.status(200).json({
            success: true,
            msg: "User created Successfully",
            user: {registerUser}
        })
    }
}

