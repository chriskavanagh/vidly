import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
//import Raven from "raven-js";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://0f8e02b01a374efcbfda7285e414b5b5@sentry.io/1441819"
});

/* Raven.config(
  "https://0f8e02b01a374efcbfda7285e414b5b5@sentry.io/1441819"
).install(); */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
