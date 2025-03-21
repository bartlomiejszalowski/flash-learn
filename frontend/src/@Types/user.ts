export type UserType = {
  _id: string;
  nickname: string;
  points: number;
  learnedWords: number;
  email: string;
  profileImage: string;
  bio: string;
  gender: "male" | "female";
  userCollections: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type UpdatedUserData = {
  nickname?: string;
  gender?: "male" | "female";
  bio?: string;
  profileImage?: File | string | null;
};
