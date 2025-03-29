import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { NewCollectionType } from "@/@Types/collections";
import { createCollectionFn } from "@/api/collection";

export const useCreateCollection = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createCollection,
    error,
    isPending,
  } = useMutation<void, AxiosError<{ message: string }>, NewCollectionType>({
    mutationFn: createCollectionFn,
    onSuccess: () => {
      toast.success("Collection created successfully");
      queryClient.invalidateQueries({ queryKey: ["userCollections"] }); // Odświeżanie danych użytkownika
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Something went wrong");
    },
  });

  return { createCollection, error, isPending };
};
