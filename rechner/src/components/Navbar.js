import {Link } from "react-router-dom";
import React from "react";

function Navbar(){
    return(
      
        <div>
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
        </div>
        </header>
      </div>
    );
}

export default Navbar;