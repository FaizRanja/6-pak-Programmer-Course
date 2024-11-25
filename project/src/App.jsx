import React, { Fragment } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> {/* Corrected the closing brace here */}
        <Route path='/about' element={<About/>} /> {/* Corrected the closing brace here */}
        <Route path='/contact' element={<Contact />} /> {/* Corrected the closing brace here */}
        {/* Corrected the closing brace here */}
      </Routes>
    </Router>
  );
};

export default App;
