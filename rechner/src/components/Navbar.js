import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Schadensrechner from "../Schadensrechner";
import Hausratsrechner from "../Hausratsrechner";
import Home from "../Home";
import React from "react";

function Navbar(){
    return(
      
        <BrowserRouter>
        <header>
        <div className="background">
          <nav className="nav">
            <ul className='navname'>

                <h1 className="logo">
                  Sujan Saravana
                </h1>

                <h1 className='Home'>
                  <Link to="/Home"><p className="nav-title">Home</p></Link>
                </h1>
              
                <h1 className='Schadensrechner'>
                  <Link to="/Schadensrechner"><p className="nav-title">Schadensrechner</p></Link>
                </h1>
              
              
                <h1 className='Hausratsrechner'>
                  <Link to="/Hausratsrechner"><p className="nav-title">Hausratsrechner</p></Link>
                </h1>
              
            </ul>
          </nav>
          
        
          <Routes>
            <Route path="/Schadensrechner" element={<Schadensrechner />} />
            <Route path="/Hausratsrechner" element={<Hausratsrechner />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </div>
        </header>
        <footer className="footer">
        <ul>
            <li><Link to="/Home" className="footer-item"><p>Home</p></Link></li>
            <li><Link to="/Schadensrechner" className="footer-item"><p>Schadensrechner</p></Link></li>
            <li ><Link to="/Hausratsrechner" className="footer-item"><p>Hausratsrechner</p></Link></li>
        </ul>
            <p className="copyright">© 2023 My Company. All rights reserved.</p>
        </footer>
      </BrowserRouter>
    );
}

export default Navbar;