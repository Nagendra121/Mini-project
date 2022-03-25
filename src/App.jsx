import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Thali from './Components/Thali'
import CheckOut from './Components/CheckOut'
import Contact from './Components/Contact'
import About from'./Components/About' 

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Thali/>} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
