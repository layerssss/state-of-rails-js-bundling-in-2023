// Entry point for the build script in your package.json
import Demo from "components/Demo";
import ReactDOM from "react-dom/client";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
