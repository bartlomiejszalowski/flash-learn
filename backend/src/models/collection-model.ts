import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
});

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;
