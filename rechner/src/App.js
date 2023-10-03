import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Hausratsrechner from './Hausratsrechner';
import React from 'react';
import Schadensrechner from './Schadensrechner';
import Home from './Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/Home" />}  />
            <Route path="/Home" element={<Home />} />
            <Route path="/Schadensrechner" element={<Schadensrechner />} />
            <Route path="/Hausratsrechner" element={<Hausratsrechner />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
