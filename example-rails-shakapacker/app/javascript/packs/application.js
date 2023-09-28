import Demo from "components/Demo";
import ReactDOM from "react-dom/client";
import React, { createElement } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  createElement(React.StrictMode, {
    children: createElement(Demo),
  })
);
//   <React.StrictMode>
//     <Demo />
//   </React.StrictMode>
