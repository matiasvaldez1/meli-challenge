import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import ScrollToTop from "./hooks/use-scroll-to-top.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Router />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
