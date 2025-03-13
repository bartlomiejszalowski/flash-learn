import cookieParser from "cookie-parser";
import dontenv from "dotenv";
import express from "express";

import { connectDB } from "./lib/db.ts";
import authRoutes from "./routes/auth-route.ts";

dontenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // for parsing req.body
app.use(cookieParser()); // for parsing cookies

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`⚡ Server is running on port ${PORT} ⚡`);
  connectDB();
});
