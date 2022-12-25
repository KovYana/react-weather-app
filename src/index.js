import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchForm from './SearchForm.js';
import CurrentTemperature from './CurrentTemperature.js';
import Footer from './Footer.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='weather-project'>
    <div className='weather-app'>
    <SearchForm />
    <CurrentTemperature />
    </div>
    <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
