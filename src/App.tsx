import { RouterProvider } from "react-router-dom";

import { QueryProvider } from "./component/QueryProvider";
import { router } from "./router";

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router}></RouterProvider>
    </QueryProvider>
  );
};

export default App;
