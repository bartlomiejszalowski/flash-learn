import express from "express";

import { createCollection } from "../controllers/collection-controller.ts";
import { protectRoute } from "../middleware/auth-middleware.ts";

const router = express.Router();

router.post("/create", protectRoute, createCollection);

export default router;
