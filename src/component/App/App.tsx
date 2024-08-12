import { RouterProvider } from "react-router-dom";

import { router } from "@/router";

import { QueryProvider } from "../QueryProvider";

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};

export default App;
