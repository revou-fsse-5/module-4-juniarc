import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
import './styles/index.css'
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
Modal.setAppElement('#root');

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
