// This is for the fake API. Do not delete!
import React,{StrictMode}  from "react";
import { createRoot } from "react-dom/client";
//import { worker } from "./mocks/browser";

import App from "./App";

import "./index.css";
import "./App.css";

//worker.start();

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<StrictMode>
    <App />
  </StrictMode>);
