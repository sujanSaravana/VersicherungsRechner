import React, { useState } from "react";
import './App.css';
import ClearBtn from "./components/ClearBtn";

function  Hausratsrechner(){
    
   const [Quadratmeter, setQuadratmeter] = useState("");
   const [Basiswert, setBasiswert] = useState("");
   const [Result, setResult] = useState("");
   const [error, setError] = useState("");


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
            setError("")
        }else{
            window.alert("Please fill in")
        }
   };
   

   
    
    return(
        <div>
            <header className="title">
                <h1>
                    Hausratsrechner
                </h1>
            </header>
            <body className="hausratsrechner">
                <div>
                    <form className="inputForm" onSubmit={enterButton}>
                        <h2>Quadratmeter</h2>
                        <input type="number" value={Quadratmeter} onChange={change} className="Quadratmeter"/>
                        <h2>Basiswert</h2>
                        <input type="number" value={Basiswert} onChange={change1} className="Basiswert"/>
                            <form className="form1">
                                <h3 className="text">Vorgeschlagene Basiswert : 200</h3>
                            </form>
                        <br></br>
                        <div className="btns-hausratsrechner">
                        <button type="submit" className="enterbtn">Enter</button>
                        <ClearBtn onClick={clear} className="clearbtn"/>
                        </div>
                    </form>
                </div>
                <div>
                    <form className="resultForm">
                        <h3 className="text">Hausratswert : {Result} CHF</h3>
                    </form>
                </div>
                <div className="error">
                    {error}
                </div>
            </body>
        </div>
    );
}

export default Hausratsrechner;