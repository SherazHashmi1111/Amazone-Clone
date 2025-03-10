import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import "./index.css";
import App from "./App.jsx";

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
);
