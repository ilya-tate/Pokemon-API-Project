import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './util/context';
import App from './App';
import '.styles/css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
