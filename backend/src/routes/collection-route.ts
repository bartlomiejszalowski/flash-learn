import express from "express";

import {
  createCollection,
  getUserCollections,
} from "../controllers/collection-controller.ts";
import { protectRoute } from "../middleware/auth-middleware.ts";

const router = express.Router();

router.post("/create", protectRoute, createCollection);
router.get("/user-collections", protectRoute, getUserCollections);

export default router;
