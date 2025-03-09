import express from 'express';
const router = express.Router()
import { login, logout, refreshToken, register }  from '../controller/authController.js';

router.post("/register", register)
router.post("/login", login)
router.get("/refresh", refreshToken)
router.get("/logout", logout)

export default router