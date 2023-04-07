import React from "react";
import { useState } from "react";
import './App.css';

function Schadensrechner() {

    const [Hausratswert, setHausratswert] = useState("");
    const [Versicherungssumme, setVersicherungssumme] = useState("")
    const [Schaden, setSchaden] = useState("");
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");

    
    
    const change = (event) => {
        setHausratswert(event.target.value);
    };

    const change1 = (event) => {
        setVersicherungssumme(event.target.value)
    }

    const change2 = (event) => {
        setSchaden(event.target.value);
    }

    const calculateEntschädigung = (event) => {
        event.preventDefault();
        setResult((Versicherungssumme * Hausratswert) / Schaden);
    }

    const calculateSchaden = () => {
        const result2 = Schaden - result;
        setResult1(Math.max(result2, 0));
    }

    const enterButton = () => {
        calculateEntschädigung();
        calculateSchaden();
        
    }

    return(
    <div>
        <h1 className="title">Schadensrechner</h1>
        <div className="rechner">
            <div className="eingaben">
                <div>
                    <form>  
                        <h2>Hausratswert</h2>
                        <input type="number" value={Hausratswert} onChange={change} />

                        <h2>Versicherungssumme</h2>
                        <input type="number" value={Versicherungssumme} onChange={change1} />

                        <h2>Schaden</h2>
                        <input type="number" value={Schaden} onChange={change2} />
                        <br></br>
                        <button onClick={enterButton} >Enter</button>
                    </form>
                </div>
            </div>
            <div className="zusammenfassung">
                <h2>Zusammenfassung</h2>
                <p>Totales Wert von Haus : {change}</p>
                <p>Versicherte Summe vom Haus : {change1}</p>
                <p>Schaden : {change2}</p>
                <p className="result">Entschädigung : {result}</p>
                <p className="result">Selbstbehalt : {result1}</p>
            </div>
        </div>
    </div>
    );
}


export default Schadensrechner;