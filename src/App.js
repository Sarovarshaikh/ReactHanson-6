import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Studens from './components/Studens';



function App() {
  return (
  <div>
   
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Studens />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    
  </div>
  );
}

export default App;
