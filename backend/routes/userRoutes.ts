import express from "express";
import { userController } from "../controllers/userController.ts";

const router = express.Router();

router.post('/users/login', userController.loginUser);
router.post('/users/register',userController.registerUser);


export default router;