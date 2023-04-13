import React from "react";
import { useState } from "react";
import './App.css';

function Schadensrechner() {

    const [Hausratswert, setHausratswert] = useState("");
    const [Versicherungssumme, setVersicherungssumme] = useState("")
    const [Schaden, setSchaden] = useState("");
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [error, setError] = useState("");

    
    
    const change = (event) => {
        setHausratswert(event.target.value);
    };

    const change1 = (event) => {
        setVersicherungssumme(event.target.value)
    };

    const change2 = (event) => {
        setSchaden(event.target.value);
    };

    const enterButton = (event) => {
        event.preventDefault();
        if(Schaden && Hausratswert && Versicherungssumme) {
            const calculate = (Versicherungssumme / Hausratswert) * Schaden;
            setResult(calculate);
            setResult1(Schaden - result);
            setResult2((result / Schaden) *100);
        }else{
            setError("Error");
        }
    };

    return(
    <div>
        <h1 className="title">Schadensrechner</h1>
        <div className="rechner">
            <div className="eingaben">
                    <form onSubmit={enterButton}>  
                        <h2>Hausratswert</h2>
                        <input type="number" value={Hausratswert} onChange={change} />

                        <h2>Versicherungssumme</h2>
                        <input type="number" value={Versicherungssumme} onChange={change1} />

                        <h2>Schaden</h2>
                        <input type="number" value={Schaden} onChange={change2}  />
                        <br></br>
                        <button type="submit" >Enter</button>
                    </form>
            </div>
            <div className="zusammenfassung">
                <h2>Zusammenfassung</h2>
                <p>Totales Wert von Haus : {Hausratswert}</p>
                <p>Versicherte Summe vom Haus : {Versicherungssumme}</p>
                <p>Schaden : {Schaden}</p>
                <p className="result">Entschädigung : {result}</p>
                <p className="result">Selbstbehalt : {result1}</p>
                <p className="result">Prozentuale  : {result2}%</p>
            </div>
        </div>
    </div>
    );
}


export default Schadensrechner;