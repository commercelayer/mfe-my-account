import * as React from "react"
import { createRoot } from "react-dom/client"

import "#styles/globals.css"
import "#utils/i18n"
import App from "./App"

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
