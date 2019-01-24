import "normalize-css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import actionWrapper from "redux-action-wrapper";
import configureStore from "./store/configureStore.js";
import ThemeProviders from './components/ThemeProviders/ThemeProviders.js'
import App from "./components/App/App.js";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle.js";
import * as actions from "./actions/index.js";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProviders>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProviders>
  </Provider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV !== "production") {
  window.actions = actionWrapper(actions, store.dispatch);
}
