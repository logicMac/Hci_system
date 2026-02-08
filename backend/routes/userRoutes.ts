import express from "express";
import { userController } from "../controllers/userController.ts";

const router = express.Router();

router.post('/login', userController.loginUser);
router.post('/register',userController.registerUser);
router.post('/verifyOtp', userController.verifyOtp);


export default router;