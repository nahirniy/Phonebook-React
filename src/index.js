import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';

import './index.css';
import './common/styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="/Phonebook-React">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
