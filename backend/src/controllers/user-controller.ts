import { Request, RequestHandler, Response } from "express";
import mongoose from "mongoose";

import cloudinary from "../lib/cloudinary.ts";
import { IUser, User } from "../models/user-model.ts";

export const getPublicProfile: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "Invalid user ID" });
    return;
  }

  const id = new mongoose.Types.ObjectId(userId);

  try {
    const user = await User.findOne({
      _id: id,
    }).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getPublicProfile:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProfile: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const allowedFields = [
      "nickname",
      "bio",
      "profileImage",
      "gender",
    ] as const;

    const updatedData: Partial<IUser> = {};

    const updatedFields: Partial<IUser> = req.body;

    for (const field of allowedFields) {
      const value = updatedFields[field];
      switch (field) {
        case "gender":
          if (value === "male" || value === "female") {
            updatedData.gender = value;
          }
          break;
        case "nickname":
        case "profileImage":
        case "bio":
          updatedData[field] = value;
          break;
      }
    }

    if (updatedFields.profileImage) {
      const result = await cloudinary.uploader.upload(
        updatedFields.profileImage
      );
      updatedData.profileImage = result.secure_url;
    }

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
