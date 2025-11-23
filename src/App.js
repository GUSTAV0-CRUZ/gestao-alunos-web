import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import history from './services/history';
import GlobalStyle from './styles/styledGlobal';
import Headers from './components/header';
import Routers from './routers';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Headers />
        <Routers />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
