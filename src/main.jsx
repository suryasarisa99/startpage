import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "../context/DataContext";
import { registerSW } from "virtual:pwa-register";
registerSW();
ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </>
);
