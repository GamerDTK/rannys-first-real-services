import React from 'react';
import './App.css';
import NavbarComp from './Navbar'
import Home from './Home'
import ContactUs from './ContactUs'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/contact-us" element={<ContactUs />}/>
        </Routes> 
      </div>
    </div>
  );
}

export default App;
