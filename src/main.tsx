import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/globals.css";
import "@/styles/styles.css";
import RoutesConfig from "./routes.js";
// import AppLayout from "./components/app-layout.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AppLayout> */}
      <RoutesConfig />
      {/* </AppLayout> */}
    </BrowserRouter>
  </React.StrictMode>,
);
