import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OutingsContextProvider } from './context/OutingContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <OutingsContextProvider>
        <App />
      </OutingsContextProvider>
    </AuthContextProvider> 
  </React.StrictMode>
);