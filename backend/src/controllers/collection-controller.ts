import { Request, RequestHandler, Response } from "express";

import cloudinary from "../lib/cloudinary.ts";
import { Collection } from "../models/collection-model.ts";
import { User } from "../models/user-model.ts";

export const createCollection: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, collectionImage, description } = req.body;

    let newCollection;

    if (collectionImage) {
      const imageResult = await cloudinary.uploader.upload(collectionImage);

      newCollection = new Collection({
        author: req.user._id,
        image: imageResult.secure_url,
        name,
        description,
      });
    } else {
      newCollection = new Collection({
        author: req.user._id,
        name,
        description,
      });
    }

    await newCollection.save();

    // 👉 Dodaj kolekcję do użytkownika (jeśli model User ma collections[])
    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { userCollections: newCollection._id } },
      { new: true }
    );

    res.status(201).json(newCollection);
  } catch (error) {
    console.log("Error creating collection:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserCollections: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const authorId = req.user._id;

    if (!authorId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const collections = await Collection.find({ author: authorId }).sort(
      "-createdAt"
    );
    res.status(200).json(collections);
  } catch (error) {
    console.log("Error getting user collections:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
