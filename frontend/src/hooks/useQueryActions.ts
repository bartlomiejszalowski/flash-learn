import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { getAuthUserFn, loginFn, logoutFn, registerFn } from "@/api/auth";
import { LoginCredentials } from "@/pages/Login/Login";

interface ErrorResponse {
  errors?: { msg: string }[]; // Jeśli serwer zwraca tablicę błędów
  message?: string; // Jeśli serwer zwraca pojedynczą wiadomość błędu
}

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: handleRegister,
    error,
    isPending,
  } = useMutation({
    mutationFn: registerFn,
    onSuccess: () => {
      toast.success("Account created successfully");
      navigate({ to: "/dashboard" });
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

export const useGetAuthUser = () => {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUserFn,
  });

  return { authUser, isLoading };
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: loginUser, isPending } = useMutation<
    void,
    AxiosError<{ message: string }>,
    LoginCredentials
  >({
    mutationFn: loginFn,
    onSuccess: () => {
      navigate({ to: "/dashboard" });
      queryClient.invalidateQueries({ queryKey: ["authUser"] }); // Odświeżanie danych użytkownika
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Something went wrong");
    },
  });

  return { loginUser, isPending };
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  const {
    mutate: logoutUser,
    isPending,
    error,
  } = useMutation<void, AxiosError<{ message: string }>>({
    mutationFn: logoutFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Something went wrong");
    },
  });

  return { logoutUser, isPending, error };
};
