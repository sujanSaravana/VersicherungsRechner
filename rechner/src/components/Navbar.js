import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Schadensrechner from "../Schadensrechner";
import Hausratsrechner from "../Hausratsrechner";

function Navbar(){
    return(
        <BrowserRouter>
        <div>
          <nav className="nav">
            <ul className='navname'>
              
                <h1 className='Schadensrechner'>
                  <Link to="/Schadensrechner">Schadensrechner</Link>
                </h1>
              
              
                <h1 className='Hausratsrechner'>
                  <Link to="/Hausratsrechner">Hausratsrechner</Link>
                </h1>
              
            </ul>
          </nav>
          
        
          <Routes>
            <Route path="/Schadensrechner" element={<Schadensrechner />} />
            <Route path="/Hausratsrechner" element={<Hausratsrechner />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default Navbar;