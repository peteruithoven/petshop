import 'normalize-css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import actionWrapper from 'redux-action-wrapper';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from './store/configureStore.js';
import App from './components/App/App.js';
import * as actions from './actions/index.js';
import theme from './theme.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <App />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  window.actions = actionWrapper(actions, store.dispatch);
}
