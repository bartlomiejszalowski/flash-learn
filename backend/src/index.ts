import cookieParser from "cookie-parser";
import cors from "cors";
import dontenv from "dotenv";
import express from "express";

import { connectDB } from "./lib/db.ts";
import authRoutes from "./routes/auth-route.ts";
import collectionRoutes from "./routes/collection-route.ts";
import userRoutes from "./routes/user-route.ts";

dontenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(express.json()); // for parsing req.body
app.use(cookieParser()); // for parsing cookies

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/collections", collectionRoutes);

app.listen(PORT, () => {
  console.log(`⚡ Server is running on port ${PORT} ⚡`);
  connectDB();
});
