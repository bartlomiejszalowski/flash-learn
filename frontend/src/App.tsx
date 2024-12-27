import { RouterProvider } from "@tanstack/react-router";
import { StrictMode, Suspense } from "react";

import { router } from "@/router/router";

export const App: React.FC = () => {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
};
