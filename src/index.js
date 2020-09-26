import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { create } from "jss";
import preset from "jss-preset-default";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./config/customization";

import App from "./components/App";

import store from "./config/store";
const jss = create(preset());

render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
