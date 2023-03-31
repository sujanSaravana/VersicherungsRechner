import './App.css';
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Schadensrechner from "./Schadensrechner";
import Hausratsrechner from "./Hausratsrechner";


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='nav'>
          <ul className='navname'>
            <li>
              <Link to="/Schadensrechner">Schadensrechner</Link>
            </li>
            <li>
              <Link to="/Hausratsrechner">Hausratsrechner</Link>
            </li>
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

export default App;
