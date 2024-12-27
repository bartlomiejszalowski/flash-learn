import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Start } from "@/pages/Start";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(error);
    },
  }),
});

const rootRoute = createRootRouteWithContext<{ query: QueryClient }>()({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

export const startPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Start,
});

export const homePage = createRoute({
  getParentRoute: () => rootRoute,
  path: "home",
  component: Home,

  //Example how to use lazy routing
  // component: lazyRouteComponent(() => import("@pages/Home")),
});

const routeTree = rootRoute.addChildren([startPage, homePage]);

export const router = createRouter({
  routeTree,
  context: {
    query: queryClient,
  },
  defaultNotFoundComponent: NotFound,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
