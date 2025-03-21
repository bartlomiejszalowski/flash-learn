import { UserType } from "@/@Types/user";
import { UpdatedUserData } from "@/@Types/user";

import { axiosInstance } from "./axios";

export const getUserProfileFn = async (userId: string) => {
  const res = await axiosInstance.get(`/users/${userId}`);
  const user: UserType = res.data;
  return user;
};

export const updateUserProfileFn = async (updatedUserData: UpdatedUserData) => {
  const res = await axiosInstance.put("/users/profile", updatedUserData);
  return res.data;
};
