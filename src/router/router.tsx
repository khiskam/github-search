import { createBrowserRouter } from "react-router-dom";

import Repositories from "../component/Repositories";
import Repository from "../component/Repository";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Repositories />,
  },
  {
    path: "repos",
    children: [
      {
        index: true,
        element: <Repositories />,
      },
      {
        path: ":userName",

        children: [
          {
            index: true,
            element: <></>,
          },
          {
            path: ":repoName",
            element: <Repository />,
          },
        ],
      },
    ],
  },
]);
