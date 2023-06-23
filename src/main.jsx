import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "../context/DataContext";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    <DataProvider>
      <App />
    </DataProvider>
  </>
);
