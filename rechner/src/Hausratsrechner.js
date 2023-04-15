import React, { useState } from "react";
import './App.css';
import ClearBtn from "./components/ClearBtn";

function  Hausratsrechner(){
    
   const [Quadratmeter, setQuadratmeter] = useState("");
   const [Basiswert, setBasiswert] = useState("");
   const [Result, setResult] = useState("");
   const [Error, setError] = useState("");


   const clear = () => {
        setQuadratmeter("");
        setBasiswert("");
        setResult("");
   }

   const change = (event) => {
    setQuadratmeter(event.target.value);
    };

    const change1 = (event) => {
        setBasiswert(event.target.value)
    };

   const enterButton = (event) => {
    event.preventDefault();
        if(Quadratmeter && Basiswert) {
            const calculate = (Quadratmeter * Basiswert);
            setResult(parseInt(calculate).toFixed(2));
        }else{
            setError("Error")
        }
   };
   

   
    
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
                <form className="eingaben" onSubmit={enterButton}>
                    <h2>Quadratmeter</h2>
                    <input type="number" value={Quadratmeter} onChange={change}/>
                    <h2>Basiswert</h2>
                    <input type="number" value={Basiswert} onChange={change1}/>
                    <br></br>
                    <button type="submit">Enter</button>
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
                    <h3>Hausratswert : {Result} CHF</h3>
                </form>
            </div>
        </div>
    );
}

export default Hausratsrechner;