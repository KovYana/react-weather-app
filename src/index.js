import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import SearchForm from './SearchForm.js';

import Footer from './Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='weather-project'>
    <div className='weather-app'>
      <div className='container'>
    <SearchForm defaultCity="Kyiv"/>
   
    <Footer />
    </div>
    </div>
    </div>
  </React.StrictMode>
);


