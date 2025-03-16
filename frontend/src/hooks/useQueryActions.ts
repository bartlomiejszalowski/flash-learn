import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { registerFn } from "@/api/auth";

interface ErrorResponse {
  errors?: { msg: string }[]; // Jeśli serwer zwraca tablicę błędów
  message?: string; // Jeśli serwer zwraca pojedynczą wiadomość błędu
}

export const useRegister = () => {
  const queryClient = useQueryClient();
  const {
    mutate: handleRegister,
    error,
    isPending,
  } = useMutation({
    mutationFn: registerFn,
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] }); // Odświeżanie danych użytkownika
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errors = axiosError.response?.data?.errors || [];

      errors.forEach((err) => {
        toast.error(err.msg || "Something went wrong");
      });

      if (errors.length === 0) {
        toast.error(
          axiosError.response?.data?.message || "Something went wrong"
        );
      }
    },
  });

  return { handleRegister, error, isPending };
};
