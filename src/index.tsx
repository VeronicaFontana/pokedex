import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
