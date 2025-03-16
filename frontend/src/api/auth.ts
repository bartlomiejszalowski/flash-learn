import { RegisterCredentials } from "@/pages/Register/Register";

import { axiosInstance } from "./axios";

export const registerFn = async (credentials: RegisterCredentials) => {
  const res = await axiosInstance.post("/auth/signup", credentials);
  return res.data;
};
