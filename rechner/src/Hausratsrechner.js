import React, { useState } from "react";
import './App.css';
import ClearBtn from "./components/ClearBtn";

function  Hausratsrechner(){
    
   const [Quadratmeter, setQuadratmeter] = useState("");
   const [Basiswert, setBasiswert] = useState("");


   const clear = () => {
        setQuadratmeter("");
        setBasiswert("");
   }
   

   
    
    return(
        <div>
            <div>
                <header className="title">
                    <h1>
                        Hausratsrechner
                    </h1>
                </header>
            </div>
            <div>
                <form className="eingaben">
                    <h2>Quadratmeter</h2>
                    <input type="number" value={Quadratmeter}/>
                    <h2>Basiswert</h2>
                    <input type="number" value={Basiswert} />
                    <br></br>
                    <button>Enter</button>
                    <ClearBtn onClick={clear} />
                </form>
            </div>
            <div>
                <form>
                    <h3>Vorgeschlagene Basiswert : 200</h3>
                </form>
            </div>
            <div>
                <form>
                    <h3>Hausratswert : </h3>
                </form>
            </div>
        </div>
    );
}

export default Hausratsrechner;