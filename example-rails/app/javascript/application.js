import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { html } from "htm/react";

import Demo from "components/Demo";

const root = createRoot(document.body);
root.render(html`
  <${React.StrictMode}>
    <${Demo} />
  <//>
`);
