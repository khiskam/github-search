import "./index.css";
import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
