import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode, Suspense } from "react";

import { router } from "@/router/router";

import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster />
        </QueryClientProvider>
      </Suspense>
    </StrictMode>
  );
};
