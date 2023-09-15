import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OutingsContextProvider } from './context/OutingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OutingsContextProvider>
      <App />
    </OutingsContextProvider>
  </React.StrictMode>
);