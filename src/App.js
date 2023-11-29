import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './components/footer';
import Management from './Pages/Management';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/management" element={<Management />} />
    </Routes>
  </div>
   <Footer />
</BrowserRouter>
    </div>
    
  );
}

export default App;
