import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Customer from './Customer';
import Product from './Product';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
const routing =(
    <Router>
     <div>
        <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Customer" element={<Customer/>}/>
       
      </Routes>
      </div>
  </Router>
  )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
