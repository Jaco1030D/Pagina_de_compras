import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Global.css';
import Home from './templates/Home';
import { MainContextProvider } from './context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContextProvider>
      <Home />
    </MainContextProvider>
  </React.StrictMode>,
);
