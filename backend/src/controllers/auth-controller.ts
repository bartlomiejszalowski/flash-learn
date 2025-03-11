import bcrypt from "bcryptjs";
import { Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";

import { User } from "../models/user-model.ts";

export const signup: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nickname, email, password, gender } = req.body;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const existingNickname = await User.findOne({ nickname });
    if (existingNickname) {
      res.status(400).json({ message: "Nickname already exists" });
      return;
    }

    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      nickname,
      email,
      password: hashedPassword,
      gender,
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    res.cookie("jwt-flashLearn", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error in signup:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = (req: Request, res: Response) => {
  res.send("login");
};

export const logout: RequestHandler = (req: Request, res: Response) => {
  res.clearCookie("jwt-flashLearn");
  res.status(200).json({ message: "Logout successful" });
};
