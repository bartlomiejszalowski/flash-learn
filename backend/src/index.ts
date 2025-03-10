import dontenv from "dotenv";
import express from "express";

import { connectDB } from "./lib/db.ts";

dontenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // for parsing req.body

app.listen(PORT, () => {
  console.log(`⚡ Server is running on port ${PORT} ⚡`);
  connectDB();
});
