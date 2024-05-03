import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './styles/helper.css'; // This File Styles Is Helper For Bootstrap
import './styles/style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingProgress from './components/LoadingProgress/LoadingProgress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <LoadingProgress />
    <App />
  </BrowserRouter>
);