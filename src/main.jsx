import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './index.css';
import Router from './router/Router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
);