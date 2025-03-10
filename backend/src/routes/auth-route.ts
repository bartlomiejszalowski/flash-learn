import { login, logout, signup } from "controllers/auth-controller.ts";
import express from "express";

export const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
