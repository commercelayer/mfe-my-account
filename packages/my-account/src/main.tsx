import React from "react"
import { render } from "react-dom"

import "./styles/globals.css"
import "./utils/i18n"
import App from "./App"

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
