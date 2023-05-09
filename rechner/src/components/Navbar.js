import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Schadensrechner from "../Schadensrechner";
import Hausratsrechner from "../Hausratsrechner";

function Navbar(){
    return(
      <header>
        <BrowserRouter>
        <div className="background">
          <nav className="nav">
            <ul className='navname'>

                <h1 className="logo">
                  LOGO
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
          </Routes>
        </div>
      </BrowserRouter>
      </header>
    );
}

export default Navbar;