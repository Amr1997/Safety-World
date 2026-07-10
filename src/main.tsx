import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import "@/fonts/dubai.css";
import "@/i18n";
import App from "@/App";
import { SmoothScroll } from "@/components/SmoothScroll";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
);
