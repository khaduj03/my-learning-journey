import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//learning from this channel! https://www.youtube.com/@cosdensolutions

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
