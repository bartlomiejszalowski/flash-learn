import axios from "axios";
import { toast } from "sonner";

import { LoginCredentials } from "@/pages/Login/Login";
import { RegisterCredentials } from "@/pages/Register/Register";

import { axiosInstance } from "./axios";

export const registerFn = async (credentials: RegisterCredentials) => {
  const res = await axiosInstance.post("/auth/signup", credentials);
  return res.data;
};

export const logoutFn = async () => {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};

export const getAuthUserFn = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error: unknown) {
    // Rzutowanie na AxiosError
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        return null; // User not authenticated
      }
      toast.error(error.response?.data?.message || "Something went wrong");
    } else {
      toast.error("Something went wrong");
    }

    throw error; // Rethrow the error to make it available in the query result
  }
};

export const loginFn = async (credentials: LoginCredentials) => {
  const res = await axiosInstance.post("/auth/login", credentials);
  return res.data;
};
