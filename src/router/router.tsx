import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    lazy: async () => {
      const { default: Layout } = await import("@/component/Layout");
      return { Component: Layout };
    },

    children: [
      {
        path: "/",
        lazy: async () => {
          const { default: Repositories } = await import(
            "@/component/Repositories"
          );
          return { Component: Repositories };
        },
      },
      {
        path: "repos/:userName/:repoName",
        lazy: async () => {
          const { default: Repository } = await import(
            "@/component/Repository"
          );
          return { Component: Repository };
        },
      },
    ],
  },
]);
