// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>,
  // </StrictMode>,
);
