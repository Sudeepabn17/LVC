import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Music from './Music';
import Dance from './Dance';
import Sports from './Sports';
import Rf from './Rf';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/Rf" element={<Rf />} />
       
       
      </Routes>
    </Router>
  );
}

export default App;
