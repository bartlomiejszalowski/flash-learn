import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { UpdatedUserData } from "@/@Types/user";
import { getUserProfileFn, updateUserProfileFn } from "@/api/user";

export const useGetUserProfile = (userId: string) => {
  const { data: userProfile, isLoading } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => getUserProfileFn(userId),

    // onSuccess: () => {
    //   queryClient.invalidateQueries(["userProfile", username]);
    // },
    // onError: (error) => {
    //   toast.error(error.response.data.message || "Something went wrong");
    // },

    //handle this is usEffect in Profile component
  });
  return { userProfile, isLoading };
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUserProfile, isPending } = useMutation<
    void,
    AxiosError<{ message: string }>,
    UpdatedUserData
  >({
    mutationFn: updateUserProfileFn,
    onSuccess: () => {
      console.log("hello");
      toast.success("Pomyslnie zaktualizowano profil");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data.message || "Something went wrong");
    },
  });

  return { updateUserProfile, isPending };
};
