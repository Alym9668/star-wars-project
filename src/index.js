import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import  './../src/index.css'
import store from './store/store';

import ThemeProvider from '../src/context/ThemeProvider'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

