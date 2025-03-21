import express from "express";

import {
  getPublicProfile,
  updateProfile,
} from "../controllers/user-controller.ts";
import { protectRoute } from "../middleware/auth-middleware.ts";

const router = express.Router();

router.get("/:userId", protectRoute, getPublicProfile);

router.put("/profile", protectRoute, updateProfile);

export default router;
