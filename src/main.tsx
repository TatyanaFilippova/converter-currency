import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ContextDataProvider from "./context/data.tsx";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextDataProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ContextDataProvider>,
);
