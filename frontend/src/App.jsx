import React from 'react'
import'./App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';



function App() {
 
  return (
    <Router>
    
      <Routes>
        
        <Route  path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/Projects" element={<Projects />}  />
        <Route path="/Contact" element={<Contacts />}  />
     
      </Routes>
    </Router>
  );
}

export default App
