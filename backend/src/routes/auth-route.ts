import express from "express";

import {
  getCurrentUser,
  login,
  logout,
  signup,
} from "../controllers/auth-controller.ts";
import { protectRoute } from "../middleware/auth-middleware.ts";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/me", protectRoute, getCurrentUser);

export default router;
