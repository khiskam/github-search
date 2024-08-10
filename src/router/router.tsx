import { createBrowserRouter } from "react-router-dom";

import RepositoriesList from "../component/RepositoriesList";
import Repository from "../component/Repository";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RepositoriesList />,
  },
  {
    path: "repos",
    children: [
      {
        index: true,
        element: <RepositoriesList />,
      },
      {
        path: ":userId",
        element: <Repository />,
      },
    ],
  },
]);
