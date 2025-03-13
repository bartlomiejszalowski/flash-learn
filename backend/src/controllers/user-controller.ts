import { Request, RequestHandler, Response } from "express";

import { IUser, User } from "../models/user-model.ts";

export const getPublicProfile: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await User.findOne({ nickname: req.user.nickname }).select(
      "-password"
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getPublicProfile:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProfile: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const allowedFields = ["nickname", "email", "bio", "profileImage"] as const;

    const updatedData: Partial<IUser> = {};

    const updatedFields: Partial<IUser> = req.body;

    for (const field of allowedFields) {
      const value = updatedFields[field];
      if (value !== undefined) {
        updatedData[field] = value;
      }
    }

    // TODO: update profile image

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: updatedData,
      },
      { new: true }
    ).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in updateProfile:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
