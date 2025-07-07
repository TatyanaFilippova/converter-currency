import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ContextDataProvider from "./context/data.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextDataProvider>
    <App />
  </ContextDataProvider>,
);
