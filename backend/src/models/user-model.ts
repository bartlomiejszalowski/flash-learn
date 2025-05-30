import mongoose from "mongoose";

// Interfejs użytkownika
export interface IUser {
  _id: mongoose.Schema.Types.ObjectId;
  nickname: string;
  points: number;
  learnedWords: number;
  email: string;
  password: string;
  profileImage: string;
  bio: string;
  gender: "male" | "female";
  userCollections: mongoose.Schema.Types.ObjectId[];
  studyingCollections: {
    collection: mongoose.Schema.Types.ObjectId;
    progress: number;
    completedModes: number[];
    startedAt: Date;
    completedAt: Date | null;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
      unique: true,
    },
    points: {
      type: Number,
      default: 0,
    },
    learnedWords: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    userCollections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
    studyingCollections: [
      {
        collection: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Collection",
          required: true,
        },
        progress: {
          type: Number,
          default: 0, // 0-100% lub liczba ukończonych trybów
        },
        completedModes: {
          type: [Number], // np. [1, 3, 5] jeśli user ukończył tryby 1, 3 i 5
          default: [],
        },
        startedAt: {
          type: Date,
          default: Date.now, // Data rozpoczęcia nauki kolekcji
        },
        completedAt: {
          type: Date,
          default: null, // Data zakończenia (null, dopóki user nie skończy)
        },
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
