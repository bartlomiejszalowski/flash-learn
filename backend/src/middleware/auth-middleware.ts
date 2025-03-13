import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { IUser, User } from "../models/user-model.ts";

export const protectRoute: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["jwt-flashLearn"];

    if (!token) {
      res.status(401).json({ message: "Unauthorized - No token provided" });
      return;
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof decodedToken === "string") {
      res.status(401).json({ message: "Unauthorized - Invalid token format" });
      return;
    }

    const user = await User.findById(
      (decodedToken as JwtPayload).userId
    ).select("-password");

    if (!user) {
      res.status(401).json({ message: "Unauthorized - User not found" });
      return;
    }

    req.user = user as IUser;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
