import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/style.scss";

// Manually initialising merchi object like so:
const merchi = window.SDK.merchi(
  "https://api.merchi.co/",
  "https://websockets.merchi.co/"
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
