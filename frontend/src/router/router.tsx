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

import { Header } from "@/components/Header/Header";
import { Collection } from "@/pages/Collection/Collection";
import { Dashboard } from "@/pages/Dashboard/Dashboard";
import { Landing } from "@/pages/Landing/Landing";
import { NotFound } from "@/pages/NotFound/NotFound";

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
      <Header />
      <Outlet />
    </QueryClientProvider>
  ),
});

export const landingPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Landing,
});

export const dashboardPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  component: Dashboard,
  //Example how to use lazy routing
  // component: lazyRouteComponent(() => import("@pages/Home")),
});

export const collectionPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "collections/$collectionId", // :collectionId is a dynamic parameter
  component: Collection,
});

const routeTree = rootRoute.addChildren([
  landingPage,
  dashboardPage,
  collectionPage,
]);

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
