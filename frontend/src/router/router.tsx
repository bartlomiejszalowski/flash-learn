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
import { Features } from "@/pages/Features/Features";
import { Landing } from "@/pages/Landing/Landing";
import { Learn } from "@/pages/Learn/Learn";
import { LearnModes } from "@/pages/LearnModes/LearnModes";
import { Login } from "@/pages/Login/Login";
import { MyCollections } from "@/pages/MyCollections/MyCollections";
import { NotFound } from "@/pages/NotFound/NotFound";
import { Profile } from "@/pages/Profile/Profile";
import { Register } from "@/pages/Register/Register";

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

export const loginPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "login",
  component: Login,
});

export const registerPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "register",
  component: Register,
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

export const featuresPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "features",
  component: Features,
});

export const profileRootPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "profile",
});

export const profilePage = createRoute({
  getParentRoute: () => profileRootPage,
  path: "$userId",
  component: Profile,
});

export const collectionRootPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "collections",
});

export const myCollectionsPage = createRoute({
  getParentRoute: () => collectionRootPage,
  path: "my-collections",
  component: MyCollections,
});

export const collectionPage = createRoute({
  getParentRoute: () => collectionRootPage,
  path: "$collectionId", // :collectionId is a dynamic parameter
  component: Collection,
});

export const learnPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "collections/$collectionId/learn", // Matches /collections/$collectionId/learn
  component: Learn,
});

export const learnModePage = createRoute({
  getParentRoute: () => rootRoute,
  path: "collections/$collectionId/learn/$learningMode",
  component: LearnModes,
});

const routeTree = rootRoute.addChildren([
  loginPage,
  registerPage,
  landingPage,
  dashboardPage,
  featuresPage,
  profileRootPage.addChildren([profilePage]),
  collectionRootPage.addChildren([
    myCollectionsPage,
    collectionPage.addChildren([
      learnPage.addChildren([
        learnModePage, // Handles all dynamic learning modes
      ]),
    ]),
  ]),
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
