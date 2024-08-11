import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    lazy: async () => {
      const Layout = await import("@/component/Layout");
      return { Component: Layout.default };
    },
    children: [
      {
        path: "/",
        lazy: async () => {
          const Repositories = await import("@/component/Repositories");
          return { Component: Repositories.default };
        },
      },
      {
        path: "repos/:userName/:repoName",
        lazy: async () => {
          const Repository = await import("@/component/Repository");
          return { Component: Repository.default };
        },
      },
    ],
  },
]);
