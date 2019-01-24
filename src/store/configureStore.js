import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { apiMiddleware } from "redux-api-middleware";
import apiAuthMiddleware from "./apiAuthMiddleware.js";
import persistenceMiddleware, { readState } from "./persistenceMiddleware.js";
import rootReducer from "../reducers/index.js";

const devMode = process.env.NODE_ENV !== "production";

export default function configureStore() {
  // read initial state, with token, from localStorage
  const initialState = readState();

  const loggerMiddleware = createLogger({
    collapsed: true
  });

  const middleware = [
    apiAuthMiddleware, // inject token in api requests
    apiMiddleware, // handle api requests
    persistenceMiddleware(state => ({
      token: state.token // store token in localStorage
    })),
    ...(devMode ? [loggerMiddleware] : [])
  ];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
