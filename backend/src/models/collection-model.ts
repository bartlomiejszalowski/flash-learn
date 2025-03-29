import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    vocabulary: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vocabulary",
      },
    ],
  },
  { timestamps: true }
);

export const Collection = mongoose.model("Collection", collectionSchema);
