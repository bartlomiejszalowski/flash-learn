import { NewCollectionType } from "@/@Types/collections";

import { axiosInstance } from "./axios";

// export const registerFn = async (credentials: RegisterCredentials) => {
//   const res = await axiosInstance.post("/auth/signup", credentials);
//   return res.data;
// };

export const createCollectionFn = async (collectionData: NewCollectionType) => {
  const res = await axiosInstance.post("/collections/create", collectionData);
  return res.data;
};

export const getUserCollectionsFn = async () => {
  const res = await axiosInstance.get("/collections/user-collections");
  return res.data;
};
